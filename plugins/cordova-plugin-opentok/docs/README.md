# OpenTok Cordova Plugin API Reference

The OpenTok API lets you add live video to your app. [Find out more online](http://www.tokbox.com/platform).

For an overview of the core concepts of OpenTok, please visit our [OpenTok Developer Page](https://tokbox.com/developer/)

### This OpenTok Cordova Plugin Library is a subset of the OpenTok JavaScript Library

## Usage

To use the OpenTok Cordova Plugin, include the OpenTok JavaScript file in your HTML file.

` <script src="opentok.js"></script> `

## API

### Objects

<table>
	<tr>
		<td>
      <a href="/docs/connection.md">Connection</a>
    </td>
    <td>Represents a connection to an OpenTok session</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/publisher.md">Publisher</a>
    </td>
    <td>Provides information about the publishing stream</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/session.md">Session</a>
    </td>
    <td>Provides access to much of the OpenTok functionality.</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/stream.md">Stream</a>
    </td>
    <td>Specifies a stream and provides information about it</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/subscriber.md">Subscriber</a>
    </td>
    <td>References a stream that you have subscribed to</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/ot.md">OT</a>
    </td>
    <td>Lets you initialize the OpenTok API and set up exception event handling</td>
	</tr>
</table>


### Events

<table>
	<tr>
		<td>
      <a href="/docs/exceptionEvent.md">exception</a>
    </td>
		<td>Triggered when errors or unexpected behavior is encountered</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/sessionEvents.md">sessionConnected</a>
    </td>
		<td>Triggered when session has successfully connected</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/sessionEvents.md">sessionDisconnected</a>
    </td>
		<td>Triggered when a session has disconnected</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/streamEvents.md">streamCreated</a>
    </td>
		<td>Triggered when new stream has been created in a session</td>
	</tr>
	<tr>
		<td>
      <a href="/docs/streamEvents.md">streamDestroyed</a>
    </td>
		<td>Triggered when stream has ended in a session</td>
	</tr>
</table>

## Positioning the camera's behind or before webview
It is possible to put the native camera's for publishers and subscribers behind the Cordova Webview, enabling you to put HTML buttons on top of the video. You can place video's behind the Webview with a negative `z-index`. Also your HTML should be transparent. For example you need to have something like this in your CSS for the transparency:
```css
# We can use class OT_root in our repository, but the main things is that the publisher container gets a black background color from OT, this needs to be removed in your CSS!
html, body, .OT_root {
  background: transparent !important;
}

# Each publisher and eachsubscriber video element should have display none
.OT_root video {
  display: none !important;
}
```
The `z-index` is respected as follows:
* If no `z-index `is given the behavior is the same as now.
* If two videos have the same `z-index` (or don't have it) and share position, last one wins.
* Videos with negative `z-index` are just visible if body's `background-color` or `background` is set to transparent.
* A video with `z-index: -3` will be placed behind videos with `z-index: -1`, `z-index: 0`, `z-index: 10`, or unset `z-index`.
* A video with `z-index: 999` will be placed on top of videos with `z-index: 888`, `z-index: 0`, `z-index: -10`, or unset `z-index`.

## Important Notes!

Since the video View is a native UIView on top of the Cordova's web view, moving the 'object' DOM will have no effect on the video. To update Video position, call this function:

```
OT.updateViews()
```
