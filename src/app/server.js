var fs = require('fs');
var https = require('https');
var express = require('express');
var cors = require('cors')
var app = express();
var corsOptions = {
    origin: 'https://ionicinto.wdipl.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

    app.get(cors(corsOptions), function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    next();
  res.json({msg: 'This is CORS-enabled for only ionicinto.wdipl.com'})
  });

var users = [];
var onlineuser = [];
var userremove = [];
var bS = '';
var usernames = {};
var chattype = '';

var options = {
//   key: fs.readFileSync('file.pem'),
//   cert: fs.readFileSync('file.crt')
};
var serverPort = 9902;
var serverHost = 'ionicinto.wdipl.com';

var server = https.createServer(app);
var io = require('socket.io')(server);

var mysql = require('mysql','utf8mb4');
var con = mysql.createConnection({
  host: "ionicinto.wdipl.com",
  user: "allister_wdiintoactive",
  password: "BabluMaurya@15Aug2015",
  database: 'allister_intoactive',
  charset : 'utf8mb4'
});
console.log(con);

server.listen(serverPort, function() {
  console.log('server up and running at %s port', serverPort);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/private-chat-room.html');
});

io.on("connection",function(socket){ 
                  
            var connectionsocketid = socket.id;   
            console.log("Connection : User is connected" +connectionsocketid);

            users.push(socket);
                socket.on("addUser",function(loginid,userid,type){
                    chattype = type;
                    userRooms(loginid,userid,type);
                    userOnline(loginid); 
                    socket.broadcast.emit('ruserup','Y');
                     //console.log('here2');
                     con.query("SELECT * FROM into_single_chat_block where senderID in (?,?) and receiverID in (?,?) and status=1",[loginid,userid,loginid,userid], function (err, result) {
                   //  console.log(result.length);
                        if(result.length == '0')
                        {
                            onloadupdUnreadMess(loginid,userid,1);
                         //   console.log('here');
                        }
                     });
                    
                    selectUserrbydate(loginid,userid); 
                    userDS(loginid,userid);
                });
                socket.on("newUser",function(loginid,userid,room){                     
                var rooms = [room];                        
                socket.username = loginid;
		socket.room = room;

                usernames[loginid] = loginid;
		socket.join(room);   
                checkUserOnline(userid);
                selflogin(loginid);
                userBlockStatusOnLoad(loginid,userid);  
                userDS(loginid,userid);
                });
                socket.on('switchRoom', function(newroom){
                    var rooms = [newroom]; 
                    socket.leave(socket.room);
                    socket.join(newroom);
                    socket.room = newroom;
                    socket.emit('updaterooms', rooms, newroom);
                });
                socket.on('disconnect', function(){
                        delete usernames[socket.username];
                        io.sockets.emit('updateusers', usernames);
//                        console.log('user:'+socket.username+' discunnect from room:'+socket.room);
                        socket.leave(socket.room);
                        userOffline(socket.username); 
                        socket.broadcast.emit('ruserup','N');
                });
                socket.on("userBlockStatus",function(loginid,userid){
                    checkUserChatBlockStatus(loginid,userid);                   
                });
                socket.on("updateBlockStatus",function(loginid, userid, blockStatus){
                    updBlockStatus(loginid, userid, blockStatus);
                });
                socket.on("updateReadMessStatus",function(loginid,userid,status){
                      con.query("SELECT * FROM into_single_chat_block where senderID = ? and receiverID=?",[loginid,userid], function (err, result) {
                      
                        if(result[0]['blockstatus'] == '0')
                        {
                            updUnreadMess(loginid,userid,status);
                        }
                     });
                    
                });
                socket.on("clearChat",function(loginid, userid,currentDateTime){
                    clearChat(loginid, userid,currentDateTime);
                });
                socket.on("deleteUser",function(loginid, userid){
                    deleteUser(loginid, userid);
                }); 
                socket.on("userMsg",function(loginid,userid,chatdate){
                    selectUserr(loginid,userid,chatdate);   
                });
                socket.on("msg",function(senderID,receiverID,message,blockStatus,readMess,time,date,us){ 
                    
                    insertMesage(senderID,receiverID,message,blockStatus,readMess,time,date,us);
                    selectUser(senderID,receiverID);   
                });                
            
    //common mysql database 
    function userRooms(loginid,userid,type){
                var query = "SELECT room,senderID,reciverID,type FROM into_chat_room WHERE (senderID = ? AND reciverID = ?) or (senderID = ? AND reciverID = ?)";
                con.query(query,[loginid,userid,userid,loginid],function(err,rows){
                    socket.emit("rooms", rows);    
            });
    }
    function userDS(loginid,userid){
                var query = "select status as us, chatLastID as clid from into_single_chat_delete where senderID = ? and receiverID = ?";
                con.query(query,[userid,loginid],function(err,rows){
                    socket.emit("dus", rows);    
            });
    }
    function selflogin(loginid){
        var query = "SELECT loginID,login FROM into_user_online WHERE loginID = ?";
            con.query(query,[loginid],function(err,rows){
            socket.emit("selflogin", rows);    
        }); 
    }
    function deleteUser(loginid, userid){
        var query = "UPDATE into_single_chat_delete SET status = 1 WHERE senderID = ? AND receiverID = ?";
            con.query(query,[loginid,userid],function(err,rows,fields){ 
                socket.emit("deleteUser",rows);
            });
    }
    function clearChat(loginid, userid,currentDateTime){
        var lastId = '';
            var querys = "SELECT id FROM into_single_chat WHERE ((senderID = ? AND receiverID = ?)OR(senderID = ? AND receiverID = ?)) AND createDate < ? Order by id desc limit 1";
                    con.query(querys,[loginid, userid,userid,loginid,currentDateTime],function(err,rows){
                        lastId = rows[0].id;
                        var query = "SELECT id,senderID,receiverID,lastChatId FROM into_single_chat_clear WHERE senderID = ? AND receiverID = ?";
                        con.query(query,[loginid, userid],function(err,rows){
                            socket.emit("lastchatid",rows);
                            if(rows.length > 0){
                                var query = "UPDATE into_single_chat_clear  SET lastChatId = ? WHERE senderID = ? AND receiverID = ?";
                                con.query(query,[lastId,loginid,userid],function(err,rows){ });
                            }else{
                                var query = "INSERT into into_single_chat_clear (senderID,receiverID,lastChatId)Values(?,?,?)";
                                con.query(query,[loginid, userid,lastId],function(err,rows){ });
                            }                            
                        });
                });
    }
    function updBlockStatus(loginid, userid, blockStatus){
        var query = "UPDATE into_single_chat_block SET status = ? WHERE senderID = ? AND receiverID = ?";
            con.query(query,[blockStatus,loginid,userid],function(err,rows,fields){
                if(blockStatus === '0')
                {
                    var query2 = "UPDATE into_single_chat SET blockStatus = ? WHERE senderID = ? AND receiverID = ?";
                    con.query(query2,[blockStatus,userid,loginid],function(err,rows){
                       
                    });
                }
                var query = "SELECT * FROM into_single_chat_block WHERE senderID = ? AND receiverID = ?";
                con.query(query,[loginid,userid],function(err,rows){
                    if(rows.length > 0){
                       socket.emit("ruserBlockStatus", rows);    
                    }
                });    
        });
    }
    function updUnreadMess(loginid,userid,status){
        var query = "UPDATE into_single_chat SET readMess = ? WHERE senderID = ? AND receiverID = ? AND readMess = 0";
            con.query(query,[status,loginid,userid],function(err,rows,fields){
        });
    }
    function onloadupdUnreadMess(loginid,userid,status){
        var query = "UPDATE into_single_chat SET readMess = ? WHERE senderID = ? AND receiverID = ? AND readMess = 0";
            con.query(query,[status,userid,loginid],function(err,rows,fields){
        });
    }
    function userBlockStatusOnLoad(loginid,userid){
        var querys = "SELECT * FROM into_single_chat_block WHERE senderID = ? AND receiverID = ?";
                    con.query(querys,[userid,loginid],function(err,rows){
                        socket.emit("pubs", rows); 
                    });
    }
    function checkUserChatBlockStatus(loginid,userid){
            var query = "SELECT * FROM into_single_chat_block WHERE senderID = ? AND receiverID = ?";
            con.query(query,[loginid,userid],function(err,rows){
                if(rows.length > 0){
                   socket.emit("ruserBlockStatus", rows);    
                }else{
                    var queryi = "INSERT INTO into_single_chat_block (senderID,receiverID) Values(?,?)";
                        con.query(queryi,[loginid,userid],function(err,rows,fields){
                    });
                    var querys = "SELECT * FROM into_single_chat_block WHERE senderID = ? AND receiverID = ?";
                    con.query(querys,[loginid,userid],function(err,rows){
                        socket.emit("ruserBlockStatus", rows); 
                    });
                }         
        });
    }
    function insertMesage(senderID,receiverID,message,blockStatus,readMess,time,date,us){        
        var query = "SELECT id,status FROM into_single_chat_block WHERE senderID = ? AND receiverID = ?";
                con.query(query,[senderID,receiverID],function(err,rows){
                   if((rows[0].status)> 0){
                    socket.emit("blockUserStatus",rows);                            
                        }else{
                            var query2 = "SELECT id,status FROM into_single_chat_block WHERE senderID = ? AND receiverID = ?";
                                con.query(query,[receiverID,senderID],function(err,rows){  
                                    if(rows[0]['blockstatus']===1)
                                    {
                                        var readMess=0;
                                    }
                             });  
                            var queryi = "INSERT INTO into_single_chat (senderID,receiverID,message,blockStatus,readMess,chatTime,chatDate,deleteUS) Values(?,?,?,?,?,?,?,?)";
                            
                                con.query(queryi,[senderID,receiverID,message,blockStatus,readMess,time,date,us],function(err,rows,fields){
                                      
                                    userDS(senderID,receiverID);
                            });
                           // console.log(readMess);
                        }
            });  
    }
    function selectUser(loginid,userid){
        
        var query = "SELECT u.user_name, u.user_type, uo.status FROM into_user u inner join into_user_online uo  on u.id = uo.loginID WHERE u.id = ?";
            con.query(query,[userid],function(err,rows){

                    socket.emit("ruserData", rows); 
          
        });         
            var query = "SELECT id,status,senderID,receiverID FROM into_single_chat_block WHERE senderID = ? AND receiverID = ?";
                con.query(query,[loginid,userid],function(err,rows){                    
                    if(rows[0].status == 0){
                        var query = "SELECT id,message,blockstatus,readMess,chatTime,createDate,senderID,receiverID FROM into_single_chat WHERE (senderID = ? AND receiverID = ?) OR (senderID = ? AND receiverID = ? AND blockStatus = 0 )order by id desc limit 1";
                            con.query(query,[loginid,userid,userid,loginid],function(err,rowss){
                             var query = "SELECT id,status,senderID,receiverID FROM into_single_chat_block WHERE (senderID = ? AND receiverID = ?)";
                                    con.query(query,[userid,loginid],function(err,rows){
                                    io.sockets.in(socket.room).emit("pubs", rows);    
                                    if(((rows[0].status)== 0)){
                                            io.sockets.in(socket.room).emit('rmsg', rowss);                                              
                                    }else{
                                            socket.emit('rmsg', rowss);  
                                    }
                                });
                        });                         
                    }                    
            });
    }    
    function selectUserr(loginid,userid,chatdate){         
            var query = "SELECT id,senderID,receiverID,lastChatId FROM into_single_chat_clear WHERE senderID = ? AND receiverID = ?";
                        con.query(query,[loginid, userid],function(err,rows){
                    if(rows.length > 0){        
                    var lastchatID = rows[0].lastChatId;        
                    var query = "SELECT * FROM into_single_chat WHERE ((senderID = ? AND receiverID = ? AND id > ?) OR (senderID = ? AND receiverID = ? AND id > ? AND blockStatus = 0 AND deleteUS = 0 )) AND chatDate = ? ";
                        con.query(query,[loginid,userid,lastchatID,userid,loginid,lastchatID,chatdate],function(err,rows){                    
                            socket.emit("ChatDate",chatdate);
                            socket.emit("ruserMsg", rows);            
                    }); 
                }else{
                        var lastchatID = 0;
                        var query = "SELECT * FROM into_single_chat WHERE ((senderID = ? AND receiverID = ? AND id > ?) OR (senderID = ? AND receiverID = ? AND id > ? AND blockStatus = 0 AND deleteUS = 0)) AND chatDate = ? ";
                            con.query(query,[loginid,userid,lastchatID,userid,loginid,lastchatID,chatdate],function(err,rows){                    
                                socket.emit("ChatDate",chatdate);   
                                socket.emit("ruserMsg", rows);            
                        });
                    }
        });
    } 
    function selectUserrbydate(loginid,userid){
            var query = "SELECT id,senderID,receiverID,lastChatId FROM into_single_chat_clear WHERE senderID = ? AND receiverID = ?";
                        con.query(query,[loginid, userid],function(err,rows){
                    if(rows.length > 0){        
                    var lastchatID = rows[0].lastChatId;        
                    var query = "SELECT DISTINCT chatDate FROM into_single_chat WHERE ((senderID = ? AND receiverID = ? AND id > ?) OR (senderID = ? AND receiverID = ? AND id > ? AND blockStatus = 0 )) order by chatDate asc";
                        con.query(query,[loginid,userid,lastchatID,userid,loginid,lastchatID],function(err,rows){                    
                        socket.emit("ruserMsgDate", rows);            
                    }); 
                }else{
                        var lastchatID = 0;
                        var query = "SELECT DISTINCT chatDate FROM into_single_chat WHERE ((senderID = ? AND receiverID = ? AND id > ?) OR (senderID = ? AND receiverID = ? AND id > ? AND blockStatus = 0 )) order by chatDate asc";
                            con.query(query,[loginid,userid,lastchatID,userid,loginid,lastchatID],function(err,rows){                    
                            socket.emit("ruserMsgDate", rows);            
                        });
                    }
        });
    } 
    
    function checkUserOnline(data){
        var query = "SELECT u.id, u.user_name, u.email,u.user_type,uo.status FROM into_user u inner join into_user_online uo  on u.id = uo.loginID WHERE u.id = ?";
            con.query(query,[data],function(err,rows){
            socket.emit("ruserData", rows);    
              if(rows[0].user_type== '1'){
                
            var query2 = "SELECT u.user_name, u.user_type, uo.status , icb.main_profile_pic as profile_pic FROM into_user u inner join into_user_online uo  on u.id = uo.loginID inner join into_consultant_bio icb on u.id= icb.uid WHERE u.id = ?";
             }else{
        var query2 = "SELECT u.user_name, u.user_type, uo.status , iub.profile_pic FROM into_user u inner join into_user_online uo  on u  .id = uo.loginID inner join into_user_bio iub on u.id= iub.uid WHERE u.id = ?";
    }
        con.query(query2,[data],function(err,rows){
            socket.emit("ruserData2", rows);                 
        });  
        });      
        
        
    }    
    function abc(data1,data2){
            if(rows[0].user_type== data1){
            var query2 = "SELECT u.user_name, u.user_type, uo.status , icb.main_profile_pic as profile_pic FROM into_user u inner join              into_user_online uo  on u.id = uo.loginID inner join into_counsultant_bio icb on u.id= icb.uid WHERE u.id = ?";
             }else{
        var query2 = "SELECT u.user_name, u.user_type, uo.status , iub.profile_pic FROM into_user u inner join into_user_online uo  on u        .id = uo.loginID inner join into_user_bio iub on u.id= iub.uid WHERE u.id = ?";
    }
        con.query(query2,[data1],[data2],function(err,rows){
            socket.emit("ruserData2", rows);                 
        });  
        
    }
    
    function userOnline(data){        
        var query = "UPDATE into_user_online SET status = ? WHERE loginID = ?";
            con.query(query,['Y',data],function(err,rows){ 
        });
    }
    function userOffline(data){
        var query = "UPDATE into_user_online SET status = ? WHERE loginID = ?";
            con.query(query,['N',data],function(err,rows){                
        });
    }
});
