import React from 'react';
import './content.css';

function goAngularUrl() {
  return "http://www.tortugadesign.com";
}

function Content(){
  return (
    <div>
    <h4>#responsiveMess!</h4>
<br />
<div class="row box border">
  <div class="col-lg-8 col-md-8 col-sm-9 col-xs-12">
    <h2>Tortuga Design</h2>
    This is an experimental site we built with the
    <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/"
      >React <img alt="" src="assets/images/react-logo.png" width="25"
    /></a>
    library.
    It's intended as a sandbox for experimenting with and
    demonstrating different uses of component based JS Frameworks
    <a href="/contact">get in touch with us </a> to learn more.
    <br />
    <br />
    To see a site we build in the same spirit with the
    <a target="_blank" rel="noopener noreferrer" href="http://www.angular.io"
      >Angular 9.x <img alt="" src="assets/images/ng-logo.png" width="20"
    /></a>
    framework, checkout the <a href = {goAngularUrl()}>[Angular Version] </a> this site.
    <br /><br />
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jfideler/">
        <img alt="" class="linkedIn-image" src="assets/images/marquee.png" />
      </a>
    </div>
    <p>
      There are a few places in nature where art and science come together. One
      of these is your organization's presence on the web.
      <small>[another is in my mind]</small>
    </p>
    <p>
      <strong>Tortuga Design</strong> exists for the purpose of combining art
      with technology to produce technical solutions that serve your business
      needs.
    </p>
  </div>

  <div >
    <div  class="tweet-feed">

      <a
        class="twitter-timeline"
        data-theme="light"
        href="https://twitter.com/jaFideler?ref_src=twsrc%5Etfw"
      >
        Tweets by jeph Fideler</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
    {/* <ng-template #noTwitter >
      <div class="tweet-feed-not">
      ! We have detected that you are using Chrome (or Safari). If you were using
      Firefox, Edge, Vivaldi, etc. you would see our owner's <a href="https://twitter.com/jaFideler"
      target="_blank">Twitter feed</a> here.
    </div>
    </ng-template> */}
  </div>
</div>
    </div>
  );
};

export default Content;