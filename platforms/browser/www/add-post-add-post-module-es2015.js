(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-post-add-post-module"],{

/***/ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js ***!
  \******************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
class FileLikeObject {
    /**
     * @param {?} fileOrInput
     */
    constructor(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        let isInput = isElement(fileOrInput);
        /** @type {?} */
        let fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        let postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        let method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _createFromFakePath(path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    _createFromObject(object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileItem {
    /**
     * @param {?} uploader
     * @param {?} some
     * @param {?} options
     */
    constructor(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */
    remove() {
        this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */
    onBeforeUpload() {
        return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onBuildForm(form) {
        return { form };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgress(progress) {
        return { progress };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onError(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @return {?}
     */
    _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    }
    /**
     * @param {?} form
     * @return {?}
     */
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileType {
    /**
     * @param {?} file
     * @return {?}
     */
    static getMimeClass(file) {
        /** @type {?} */
        let mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    static fileTypeDetection(inputFilename) {
        /** @type {?} */
        let types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        let chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        let extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
class FileUploader {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            (item) => item._file),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    addToQueue(files, options, filters) {
        /** @type {?} */
        let list = [];
        for (let file of files) {
            list.push(file);
        }
        /** @type {?} */
        let arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        let count = this.queue.length;
        /** @type {?} */
        let addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        (some) => {
            if (!options) {
                options = this.options;
            }
            /** @type {?} */
            let temp = new FileLikeObject(some);
            if (this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                let fileItem = new FileItem(this, some, options);
                addedFileItems.push(fileItem);
                this.queue.push(fileItem);
                this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                let filter = arrayOfFilters[this._failFilterIndex];
                this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeFromQueue(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */
    clearQueue() {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cancelItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    }
    /**
     * @return {?}
     */
    uploadAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploading));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item._prepareToUploading()));
        items[0].upload();
    }
    /**
     * @return {?}
     */
    cancelAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.cancel()));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFile(value) {
        return isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFileLikeObject(value) {
        return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getIndexOfItem(value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */
    getNotUploadedItems() {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploaded));
    }
    /**
     * @return {?}
     */
    getReadyItems() {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => (item.isReady && !item.isUploading)))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        (item1, item2) => item1.index - item2.index));
    }
    /**
     * @return {?}
     */
    destroy() {
        return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */
    onAfterAddingAll(fileItems) {
        return { fileItems };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    onBuildItemForm(fileItem, form) {
        return { fileItem, form };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onAfterAddingFile(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter, options) {
        return { item, filter, options };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onBeforeUploadItem(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    onProgressItem(fileItem, progress) {
        return { fileItem, progress };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgressAll(progress) {
        return { progress };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccessItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onErrorItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancelItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCompleteItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @return {?}
     */
    onCompleteAll() {
        return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _mimeTypeFilter(item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileSizeFilter(item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileTypeFilter(item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onErrorItem(item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCompleteItem(item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        let nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    }
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    _headersGetter(parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _xhrTransport(item) {
        /** @type {?} */
        let that = this;
        /** @type {?} */
        let xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        let sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            const appendFile = (/**
             * @return {?}
             */
            () => sendable.append(item.alias, item._file, item.file.name));
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    /** @type {?} */
                    let paramVal = this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            /** @type {?} */
            let gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            let method = '_on' + gist + 'Item';
            ((/** @type {?} */ (this)))[method](item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onErrorItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onCancelItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (let header of this.options.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (let header of item.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => xhr.send(JSON.stringify(result))));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    }
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    _getTotalProgress(value = 0) {
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        let notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        let uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        let ratio = 100 / this.queue.length;
        /** @type {?} */
        let current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    }
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    _getFilters(filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            let names = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => names.indexOf(filter.name) !== -1));
        }
        return this.options.filters;
    }
    /**
     * @protected
     * @return {?}
     */
    _render() {
        return void 0;
    }
    /**
     * @protected
     * @return {?}
     */
    _queueLimitFilter() {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    _isValidFile(file, filters, options) {
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => {
            this._failFilterIndex++;
            return filter.fn.call(this, file, options);
        }));
    }
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    _isSuccessCode(status) {
        return (status >= 200 && status < 300) || status === 304;
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    _transformResponse(response, headers) {
        return response;
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    _parseHeaders(headers) {
        /** @type {?} */
        let parsed = {};
        /** @type {?} */
        let key;
        /** @type {?} */
        let val;
        /** @type {?} */
        let i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        (line) => {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    _onWhenAddingFileFailed(item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onAfterAddingFile(item) {
        this.onAfterAddingFile(item);
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    _onAfterAddingAll(items) {
        this.onAfterAddingAll(items);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onBeforeUploadItem(item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    _onBuildItemForm(item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    _onProgressItem(item, progress) {
        /** @type {?} */
        let total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccessItem(item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancelItem(item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileSelectDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @return {?}
     */
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        let files = this.element.nativeElement.files;
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileSelect]' },] }
];
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileSelectDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileDropDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileDrop]' },] }
];
/** @nocollapse */
FileDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileDropDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadModule {
}
FileUploadModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-file-upload.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click)=\"goBack()\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Add Post</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-label class=\"text-green\" (click)=\"postImg()\">Post</ion-label>\r\n      <!-- <ion-fab-button class=\"btn-next\" size=\"small\" slot=\"end\"><ion-icon ios=\"ios-send\" md=\"md-send\"></ion-icon></ion-fab-button>           -->\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-row class=\"ion-padding-horizontal main_content\">\r\n  <ion-col size=\"6\" class=\"ion-no-padding\">\r\n    <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n      <div class=\"upload_icon\">\r\n        <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n      </div>\r\n      <ion-card-title>Library</ion-card-title>\r\n    </ion-card>\r\n  </ion-col>\r\n  <ion-col size=\"6\" class=\"ion-no-padding\">\r\n    <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n\r\n      <div class=\"upload_icon\">\r\n        <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n      </div>\r\n      <ion-card-title>Camera</ion-card-title>\r\n\r\n    </ion-card>\r\n  </ion-col>\r\n  </ion-row>\r\n<ion-content class=\"main_content\">\r\n  <ion-grid class=\"ion-padding-horizontal\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n\r\n          <ion-list>\r\n            <ion-item class=\"mb-10 ion-no-padding\" >\r\n              <ion-textarea rows=\"5\" auto-grow=\"true\" #myInput placeholder=\"Write something here\" class=\"form-control\" [(ngModel)]=\"description\"></ion-textarea>\r\n            </ion-item>\r\n          </ion-list>\r\n       \r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <!-- <ion-slides pager=\"false\" [options]=\"sliderOpts\" class=\"autowidth-slider mb-10\" #mySlider>\r\n          <ion-slide *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\"/>\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-slide>  \r\n        </ion-slides>  -->\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding scrollable-imgs\">\r\n          <ion-segment-button *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\"/>\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-segment-button>         \r\n        </ion-segment>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<!-- <ion-footer class=\"sticky-footer icon-footer\">\r\n  <ion-list class=\"ion-no-margin\">\r\n    <ion-item>\r\n      <img src=\"../../assets/images/photo.svg\"  (click)=\"openGallery()\" />\r\n    </ion-item>\r\n    <ion-item>\r\n      <img src=\"../../assets/images/photo-camera.svg\" (click)=\"takeSnap()\" />\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/add-post/add-post-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-post/add-post-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddPostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageRoutingModule", function() { return AddPostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-post.page */ "./src/app/add-post/add-post.page.ts");




const routes = [
    {
        path: '',
        component: _add_post_page__WEBPACK_IMPORTED_MODULE_3__["AddPostPage"]
    }
];
let AddPostPageRoutingModule = class AddPostPageRoutingModule {
};
AddPostPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPostPageRoutingModule);



/***/ }),

/***/ "./src/app/add-post/add-post.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-post/add-post.module.ts ***!
  \*********************************************/
/*! exports provided: AddPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function() { return AddPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-post-routing.module */ "./src/app/add-post/add-post-routing.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-post.page */ "./src/app/add-post/add-post.page.ts");








let AddPostPageModule = class AddPostPageModule {
};
AddPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPostPageRoutingModule"]
        ],
        declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_7__["AddPostPage"]]
    })
], AddPostPageModule);



/***/ }),

/***/ "./src/app/add-post/add-post.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-post/add-post.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-slide {\n  width: auto; }\n\nion-textarea.form-control textarea {\n  height: 100%;\n  padding: 0; }\n\n.scrollable-imgs ion-segment-button {\n  border-radius: 8px;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin-right: 8px;\n  background: whitesmoke;\n  --border-color: transparent;\n  display: block;\n  height: 260px;\n  width: 160px;\n  max-width: 160px; }\n\n.scrollable-imgs ion-segment-button img {\n  width: 100%;\n  height: 260px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.scrollable-imgs ion-segment-button ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 0;\n  color: #222; }\n\nion-footer.sticky-footer {\n  padding: 0; }\n\nion-footer.sticky-footer ion-list {\n    flex-wrap: nowrap; }\n\nion-footer.sticky-footer ion-list ion-item {\n      width: 50%;\n      margin: 0;\n      text-align: center;\n      background: #3da89e;\n      --background: #3da89e; }\n\nion-footer.sticky-footer ion-list ion-item img {\n        margin: auto; }\n\nion-footer.sticky-footer ion-list ion-item::after {\n      content: '';\n      width: 1px;\n      height: 30px;\n      background: #94e2db;\n      position: absolute;\n      top: 13px;\n      right: 0; }\n\nion-footer.sticky-footer ion-list ion-item:nth-child(2)::after {\n      display: none; }\n\nion-footer.sticky-footer ion-list ion-item:nth-child(2) {\n      background: #3da89e;\n      --background: #3da89e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBvc3QvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxhZGQtcG9zdFxcYWRkLXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsV0FBVyxFQUFBOztBQUMxQjtFQUFtQyxZQUFZO0VBQUMsVUFBVSxFQUFBOztBQUMxRDtFQUFvQyxrQkFBa0I7RUFBQyxrQkFBZ0I7RUFBRyxnQkFBYztFQUFHLGlCQUFpQjtFQUFDLHNCQUFzQjtFQUFDLDJCQUFlO0VBQWEsY0FBYztFQUFDLGFBQWE7RUFBQyxZQUFZO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQzFOO0VBQXdDLFdBQVc7RUFBQyxhQUFhO0VBQUMsb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUNuRjtFQUE2QyxrQkFBa0I7RUFBQyxRQUFRO0VBQUMsTUFBTTtFQUFDLFNBQVM7RUFBQyxXQUFVLEVBQUE7O0FBQ3BHO0VBQXlCLFVBQVUsRUFBQTs7QUFBbkM7SUFDYyxpQkFBaUIsRUFBQTs7QUFEL0I7TUFFVyxVQUFVO01BQUMsU0FBUztNQUFDLGtCQUFrQjtNQUFLLG1CQUFtQjtNQUN2RSxxQkFBYSxFQUFBOztBQUhoQjtRQUlPLFlBQVksRUFBQTs7QUFKbkI7TUFNa0IsV0FBVztNQUFDLFVBQVU7TUFBQyxZQUFZO01BQ2xELG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsU0FBUztNQUFDLFFBQVEsRUFBQTs7QUFUckI7TUFVK0IsYUFBYSxFQUFBOztBQVY1QztNQVc0QixtQkFBbUI7TUFDNUMscUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1wb3N0L2FkZC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItc2xpZGUge3dpZHRoOiBhdXRvO31cclxuaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbCB0ZXh0YXJlYXtoZWlnaHQ6IDEwMCU7cGFkZGluZzogMDt9XHJcbi5zY3JvbGxhYmxlLWltZ3MgaW9uLXNlZ21lbnQtYnV0dG9ue2JvcmRlci1yYWRpdXM6IDhweDstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDttYXJnaW4tcmlnaHQ6IDhweDtiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlOy0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtkaXNwbGF5OiBibG9jaztoZWlnaHQ6IDI2MHB4O3dpZHRoOiAxNjBweDttYXgtd2lkdGg6IDE2MHB4fVxyXG4uc2Nyb2xsYWJsZS1pbWdzIGlvbi1zZWdtZW50LWJ1dHRvbiBpbWd7d2lkdGg6IDEwMCU7aGVpZ2h0OiAyNjBweDtvYmplY3QtZml0OiBjb3Zlcjt9XHJcbi5zY3JvbGxhYmxlLWltZ3MgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMDt0b3A6IDA7bWFyZ2luOiAwO2NvbG9yOiMyMjJ9XHJcbmlvbi1mb290ZXIuc3RpY2t5LWZvb3RlcntwYWRkaW5nOiAwO1xyXG5cdGlvbi1saXN0eyAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRcdGlvbi1pdGVte3dpZHRoOiA1MCU7bWFyZ2luOiAwO3RleHQtYWxpZ246IGNlbnRlcjsgICAgYmFja2dyb3VuZDogIzNkYTg5ZTtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiAjM2RhODllO1xyXG5cdFx0XHRpbWd7bWFyZ2luOiBhdXRvO31cclxuXHRcdH1cclxuXHRcdGlvbi1pdGVtOjphZnRlcntjb250ZW50OiAnJzt3aWR0aDogMXB4O2hlaWdodDogMzBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzk0ZTJkYjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDEzcHg7cmlnaHQ6IDA7fVxyXG5cdFx0aW9uLWl0ZW06bnRoLWNoaWxkKDIpOjphZnRlcntkaXNwbGF5OiBub25lO31cclxuXHRcdGlvbi1pdGVtOm50aC1jaGlsZCgyKXsgICAgYmFja2dyb3VuZDogIzNkYTg5ZTtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiAjM2RhODllO31cclxuXHR9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/add-post/add-post.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-post/add-post.page.ts ***!
  \*******************************************/
/*! exports provided: AddPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPage", function() { return AddPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");












let AddPostPage = class AddPostPage {
    constructor(camera, imagePicker, transfer, nutritionService, commonService, sanitizer, formBuilder, navCtrl, router) {
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.nutritionService = nutritionService;
        this.commonService = commonService;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.router = router;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploader"]({
            url: 'https://ionicinto.wdipl.com/api/auth/uploadPost',
            autoUpload: true,
            method: 'post',
            headers: [{ name: 'Access-Control-Allow-Credentials', value: 'true' },
                { name: 'Access-Control-Allow-Origin', value: '*' }]
        });
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 15,
        };
        this.win = window;
        this.gallaryImgPath = [];
        this.fileTransfer = this.transfer.create();
        this.token = localStorage.getItem('userToken');
        this.uploadOpts = {
            fileKey: 'file',
            fileName: 'somerandom.jpg',
            httpMethod: 'POST',
            headers: { 'Authorization': 'Bearer ' + this.token },
            params: {}
        };
        this.createForm();
    }
    ngOnInit() {
    }
    onFileSelected(event) {
        const file = event[0];
    }
    pickImage(sourceType) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
            console.log('viraj', imageData);
        }, (err) => {
            // Handle error
            alert(err);
        });
    }
    //
    createForm() {
        this.addPostForm = this.formBuilder.group({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormArray"]([this.formBuilder.group({
                    name: ['']
                })]),
        });
    }
    takeSnap() {
        this.pickImage(this.camera.PictureSourceType.CAMERA);
    }
    // ----------------------------- Open gallery  with multiple --------------//
    openGallery() {
        let options = {
            maximumImagesCount: 8,
            outputType: 1
        };
        if (!this.imagePicker.hasReadPermission) {
            this.imagePicker.requestReadPermission();
            return null;
        }
        if (this.imagePicker.hasReadPermission) {
            this.imagePicker.getPictures(options).then((results) => {
                console.log('batman', results);
                if (results == 'OK') {
                    return;
                }
                for (var i = 0; i < results.length; i++) {
                    this.gallaryImgPath.push('data:image/jpeg;base64,' + results[i]);
                }
            }, (err) => { alert(err); });
        }
    }
    removeImg(index) {
        this.gallaryImgPath.splice(index, 1);
    }
    //public fileUploader: FileUploader = new FileUploader({});
    postImg() {
        if (this.gallaryImgPath.length == 0 && !this.description) {
            return false;
        }
        this.commonService.presentLoader();
        this.postSubscrib = this.nutritionService.uploadPost({ 'file[]': this.gallaryImgPath, 'description': this.description }).subscribe((data) => {
            this.commonService.dismissLoader();
            this.router.navigateByUrl('tabs/consultant-profile');
        }, (err) => {
            this.commonService.dismissLoader();
        });
    }
    //------------------ -- GO BACK  ------------
    goBack() {
        this.navCtrl.back();
    }
    ngOnDestroy() {
        console.log('destroy');
        this.description = null;
        this.gallaryImgPath = null;
    }
};
AddPostPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__["NutritionService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddPostPage.prototype, "content", void 0);
AddPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-post.page.scss */ "./src/app/add-post/add-post.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
        _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__["NutritionService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
], AddPostPage);



/***/ })

}]);
//# sourceMappingURL=add-post-add-post-module-es2015.js.map