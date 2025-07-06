// ==UserScript==
// @name         NI_SM_PD_1.0
// @version      1.0
// @match        https://*.margonem.pl/
// @match        https://*.margonem.com/
// @icon         https://img.freepik.com/premium-wektory/postac-santa-muerte-halloween_84471-72.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (getCookie('interface')==='ni') {
      $(`<style>
      .cll-timer {
        text-align: center;
        font-family: 'Montserrat';
        margin-top: 1px;
        margin-left: 0px;
        display: inline-block;
        background: #000000e8;
        border: 1px solid rgb(101 0 93);
        flex-basis: 130px;
        cursor: pointer;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        text-shadow: 1px 1px 2px black;
        font-weight: 600;
    }
    .cll-alert {
        position: absolute;
        width: 90%;
        min-width: 180px;
        max-width: 500px;
        background: #000000c9;
        z-index: 400;
        border: 1px solid #5f0058;
        padding: 5px;
        text-align: center;
        font-family: Segoe UI, sans-serif;
        pointer-events: initial;
        box-shadow: 0px 0px 11px 0px rgb(101 0 93);
        border-radius: 5px;
    }
    .cll-alert-content {
        margin: 12px 0 0;
        font-size: 11px;
        width: 100%;
        border: none;
        resize: none;
        text-align: center;
        font-family: 'Montserrat';
        background: #000000c9;
        color: white;
    }
    .cll-alert-header {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
        color: #9d0391;
        font-family: 'Montserrat';
        font-weight: 600;
    }
    .cll-alert button {
        margin: 5px auto 0;
        font-size: 10px;
        border: none;
        padding: 7px 13px 4px;
        cursor: pointer;
        outline: none;
        background: #00000054;
        color: white;
        margin-right: 4px;
        box-shadow: 0px 0px 1px #696969;
        font-family: 'Montserrat';
    }
    .cll-alert button:hover {
        background: #4600408f;
        border: 1px solid #a304958f;
        border-radius: 5px;
    }
    .cll-modal {
      text-align: center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      min-width: 180px;
      background: #000000e0;
      z-index: 999;
      max-height: 75vh;
      border: 1px solid #5f0058;
      padding: 5px;
      color: #7d7878;
      pointer-events: initial;
      font-family: sans-serif;
      visibility: hidden;
      display: none;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      text-shadow: 1px 1px 2px black;
      box-shadow: 0px 0px 11px 0px rgb(101 0 93);
  }
  .cll-bordered-button {
      border: 1px solid #5f0058;
      padding: 4px 8px 3px;
      display: inline-block;
      max-width: 120px;
      margin: 0 auto;
      font-size: 9px;
      line-height: 12px;
      cursor: pointer;
      color: white;
      margin-top: 7px;
      box-sizing: border-box;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
      text-decoration: none;
      text-align: center;
  }
  .cll-launcher {
      width: 12px;
      height: 12px;
      padding: 6px;
      position: absolute;
      bottom: 125px;
      z-index: 297;
      background: #000000;
      border: 1px solid rgb(95 0 88);
      opacity: 0.6;
      color: #fff;
      left: 1px;
      pointer-events: initial;
      font-family: 'Montserrat';
  }
    .clan-quests-content .black{cursor: url(https://i.imgur.com/kGie5v7.png),url(https://i.imgur.com/kGie5v7.png),auto;}
    .default-cursor {cursor: url(https://i.imgur.com/kGie5v7.png),url(https://i.imgur.com/kGie5v7.png),auto;}
    .dialogue-cursor {cursor: url("https://i.imgur.com/pSG5XQC.png"), url("https://i.imgur.com/pSG5XQC.png"), auto;}
    .battle-msg {cursor: url(https://i.imgur.com/kGie5v7.png),url(https://i.imgur.com/kGie5v7.png),auto;}
    .new-chat-message .information-part .author-section.click-able, .new-chat-message .information-part .receiver-section.click-able, .new-chat-message .message-part .chat-message-clan-link, .new-chat-message
    .message-part .chat-message-profile-link, .new-chat-message .message-part .link.mark-message-span, .new-chat-message .message-part .linked-chat-item, .new-chat-message .message-part .message-section .click-able
    {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .color-picker .choose-color-wrapper .choose-color-bck{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .right-column .inner-wrapper .battle-set-wrapper .battle-set-choice{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .premium-panel .product-kind .premium-item-wrapper .premium-item{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .news-panel .news-content .news-arrow-element{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .news-panel .news-content .news-section a {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .news-time-promo-tile .buy-button-wrapper .buy-button {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto !important;}
    .button, .widget-button{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto !important;}
    .border-window .close-button-corner-decor .close-button{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto}
    .border-window .close-button-corner-decor .close-button:hover{background:url(https://i.imgur.com/qPYTckY.png); background: url(https://i.imgur.com/qPYTckY.png) -286px -79px;}
    .skills-window .left-column .skills-wrapper .skill {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .world-window__tabs{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto}
    .relogger__one-world {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto; transition:.2s;}
    .relogger__one-character:not(.disabled) {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .settings-window .hero-options-config .hero-options li {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .settings-window .notifications-config .scroll-wrapper .scroll-pane .all-notification .sound-notif{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .do-action-cursor {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .card-content .clan-members-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr .hover-header{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .game-window-positioner .inventory_wrapper .bags-navigation .item{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .cards-header-wrapper .cards-header .card:not(.disabled):hover{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .elite-timer .row.short{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .elite-timer .row.long{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .member-online, .mz-button--icon svg, #maddonz .cursor--pointer, .mz-control__control, .mz-state-button{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .addonDisplay-scroll-content > div{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .divide-list-group{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .tp-scroll .right-column .scroll-wrapper .scroll-pane .mini-map-wrapper .mini-map-positioner .cords{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .one-item-on-divide-list{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .cll-alert{cursor: url(https://i.imgur.com/kGie5v7.png),url(https://i.imgur.com/kGie5v7.png),auto;}
    .cll-alert button{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .cll-bordered-button{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .cll-modal button{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .cll-modal{cursor: url(https://i.imgur.com/kGie5v7.png),url(https://i.imgur.com/kGie5v7.png),auto;}
    .chat-input-wrapper .control-wrapper .menu-card .card-name{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .border-window .header-label-positioner .header-label{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .card-content .clan-list-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr .hover-header{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .card-content .clan-list-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr .normal-td{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .layer.interface-layer .positioner.top .hud-container .btn-min {cursor: url(https://i.imgur.com/izw7JLQ.png),url(https://i.imgur.com/izw7JLQ.png),auto;}
    .MBEditor .mb-label{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .battle-skill{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .battle-skill.disabled{cursor: url(https://i.imgur.com/kGie5v7.png),url(https://i.imgur.com/kGie5v7.png),auto;}
    .battle-controller .attach-battle-log-help-window{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .battle-controller .attach-battle-prediction-help-window{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .scroll-wrapper .scrollbar-wrapper .track .handle, .scroll-wrapper.classic-bar .scrollbar-wrapper .track .handle {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .scroll-wrapper .scrollbar-wrapper .arrow-down, .scroll-wrapper.classic-bar .scrollbar-wrapper .arrow-down {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .scroll-wrapper .scrollbar-wrapper .arrow-up, .scroll-wrapper.classic-bar .scrollbar-wrapper .arrow-up {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .btn-min{cursor:url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .chat-channel-card-wrapper .chat-channel-card .chat-channel-card-icon {cursor: url(https://i.imgur.com/pLDCehG.png) 4 0,url(https://i.imgur.com/pLDCehG.png) 4 0,auto;}
    .friend-enemy-list .friend-enemy-cards .card{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .border-window.transparent .increase-opacity {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .settings-button{background: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .toggle-size-button{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .matchmaking-tile{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png ) 4 0,auto;}
    .border-window.transparent .collapse{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .scroll-wrapper.small-bar .scrollbar-wrapper .track .handle{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .clan .left-column .scroll-wrapper .scroll-pane .card{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .clan-skills-content .black {cursor: url(https://i.imgur.com/kGie5v7.png),url(https://i.imgur.com/kGie5v7.png),auto;}
    .popup-menu .menu-item {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;min-width: 90px;padding: 3px 5px;display: block;margin-bottom: 1px;font-size: 12px;text-align: center;border-radius: 3px;background-color: #0c0c0c8c;color: #a3a3a3;border: 1px solid #000000;}
    .chat-input-wrapper .control-wrapper .chat-config-wrapper .chat-config-wrapper-button{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .attack-cursor {cursor: url(https://i.imgur.com/R9Znkzs.png),url(https://i.imgur.com/R9Znkzs.png),auto;}
    .mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option{cursor:  url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .who-is-here .scroll-wrapper .scroll-pane .one-other .tip-container{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .party .list .party-member .table-wrapper{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .party .list .party-member .party-options .kick-out{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .party .list .party-member .party-options .give-lead{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .party .list .party-member .table-wrapper .hp{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .dialogue-window .content .answers li{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto; border-bottom: 1px solid rgb(107 107 107 / 40%);}
    .border-window .increase-opacity, .dialogue-window .increase-opacity{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .captcha-pre-info__toggler{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .radio-custom [type=radio]+label{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .depo .bottom-section .cards-menu .card:not(.disabled){cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .alerts-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .arrow-up, .console-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .arrow-up, .mAlert-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .arrow-up, .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .arrow-up
    {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .alerts-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .arrow-down, .console-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .arrow-down, .mAlert-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .arrow-down, .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .arrow-down
    {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .alerts-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background, .console-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background, .mAlert-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background, .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background
    {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .alerts-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .track .handle, .console-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .track .handle, .mAlert-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .track .handle, .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .track .handle
    {cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .menu-list .menu-option{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .auction-window .left-column-auction .all-categories-auction .action-menu-item{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .drop-down-menu-section .type-header{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .auction-window .left-column-auction .all-categories-auction .one-category-auction{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}
    .auction-but{cursor: url(https://i.imgur.com/MYJBtX8.png) 4 0,url(https://i.imgur.com/MYJBtX8.png) 4 0,auto;}


 .button.mz-widget, .widget-button.mz-widget {
          background: linear-gradient(to top, #101010, #252525); box-shadow: inset 0 0 1px 1px #414141, inset 0 0 0 3px #0c0d0d;
        }

        \
 .button.mz-widget:before, .widget-button.mz-widget:before {
          box-shadow: inset 0 0 1px 1px #000000a6;
        }

        \
        .mz-window__header {
          display: flex; align-items: center; font-size: 11px;
        }

        .mz-window__background {
          position: absolute; inset: 0; z-index: -1; background: #000000b0; border: 1px solid black; pointer-events: none;
        }

        .mz-window {
          position: absolute; padding: 3px 5px; z-index: 1; border: 1px solid #383838; border-radius: 2px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;
        }

        .member-online>div:nth-child(2) {
          color: #a1a1a1;
        }

        .member-online {
          display: flex; justify-content: space-between; font-weight: 700; margin: 4px 0; cursor: url(https://cronus.margonem.com/img/gui/cursor/5.png), pointer; font-family; Arial; text-shadow: 0 0 4px #595959;
        }

        .member-online>div:nth-child(1) {
          color: #00b6ff; margin-right: 0.5em;
        }

        .mz-control__control {
          background: #0000009e;
        }

        .bonus-reselect-wnd__bg {
          background: url(../img/gui/quests/quest_middle.png?v=1696325415021); background-size: contain; background-color: black; background-blend-mode: color-burn;
        }

        .addonDisplay-scroll-wrapper {
          width: 100%; height: 27px; border-bottom: 1px gray !important;
        }

        .b_wrapper {
          background: rgb(0 0 0 / 0%) !important;
        }

        .new-chat-window .chat-message-wrapper .scroll-pane .one-message-wrapper.active {
          display: block; font-family; Arial; font-size: 11px;
        }

        .layer.loader-layer .progress-bar .progress-bar-and-image-wrapper .inner-wrapper .inner {
          background: #9d9d9d;
        }

        .layer.loader-layer .progress-bar .progress-bar-and-image-wrapper .inner-wrapper {
          height: 7px; width: 272px; margin: auto; margin-top: 12px; background: #1a1a1a; overflow: hidden; border-radius: 10px; box-shadow: 0px 0px 7px 2px #ffffff78;
        }

        .button.small.green.pressed {
          background-image: linear-gradient(to top, #121212, #1f1f1f) !important; box-shadow: inset 0 0 0px 1px #242424, inset 0 0 0 2px #9dffa0 !important;
        }

        .battle-window .one-warrior .warrior {
          filter: drop-shadow(0px 2px 4px black);
        }

        .battle-window .battle-background {
          filter: brightness(0.5);
        }

        .premium-panel .product-kind {
          filter: grayscale(1);
        }

        .pre-premium-panel .tiles-wrapper {
          filter: grayscale(1);
        }

        .battle-msg.attack {
          text-align: center; filter: opacity(0.7);
        }

        .battle-msg.attack2 {
          text-align: center; filter: opacity(0.7);
        }

        .npc-message {
          text-align: center; text-shadow: 0 0 10px #5e5e5e;
        }

        .dialogue-window .content .answers li {
          color: #bdbdaa; border: 1px solid rgb(52 52 52); box-shadow: 0 0 1px rgb(0 0 0 / 88%); background: rgb(110 110 110 / 10%); font-size: 14px; text-align:center;
        }

        .dialogue-window header .h_content {
          filter: grayscale(1); font-size: 15px; color: darkgray;
        }

        .auction-window .main-column-auction .all-auction-section {
          background: black;
        }

        .button, .widget-button {
          background-color: #000; box-shadow: inset 0 0 0 1px #949293, inset 0 0 0 3px #0c0d0d; border: solid 1px #0c0d0d; background-image: linear-gradient(to top, #000000, #1a1a1a); box-shadow: inset 0 0 1px 1px #cecece, inset 0 0 0 3px #0c0d0d; color: #e6d6bf;
        }

        .button::before, .widget-button::before {
          box-shadow: inset 0 0 1px 1px rgb(24 24 24 / 65%); backface-visibility: hidden;
        }

        .auction-window .main-column-auction .all-auction-section.scrollable {
          right: 14px; background-color: black;
        }

        .auction-window .left-column-auction-and-main-column-auction {
          left: 151px; background: url(../img/gui/recipes/2.png?v=1681719102685) -2px 0; background-color: black; filter: grayscale(1);
        }

        .auction-window .main-column-auction .auction-search-item {
          background: black; filter: revert;
        }

        .auction-window .main-column-auction .all-auction-info-wrapper {
          background:black;
        }

        .auction-window .bottom-part .bottom-panel-graphics {
          border-image: url(../img/gui/recipes/5.png?v=1681719102685) 0 59 fill stretch; height: 41px; background-color: black; filter: grayscale(1);
        }

        .auction-window .middle-graphic {
          background-color: black; filter: grayscale(1);
        }

        .gained-exp-indicator {
          color: white !important;
        }

        .relogger__one-world.active {
            color: #cd0d4a;
            font-weight: 700;
            border-radius: 3px;
            border-block: inherit;
        }

        .world-window__bg {
          border-image: none; background-color: black; filter: brightness(0.1);
        }

        .players-online__item {
          width: calc(25% + 1px); border: 1px solid #343434; box-shadow: inset 0px 0px 11px 2px #2a2a2a;
        }

        .button .label {
          color: white; text-shadow: 0px 0px 6px #3e3e3e;
        }

        .button .label {
          color: white; text-shadow: 0px 0px 6px #3e3e3e;
        }

        .button.red::before, .widget-button.red::before {
          box-shadow: inset 0 0 1px 1px rgb(0 0 0 / 65%);
        }

        .button.red, .widget-button.red {
          background-image: linear-gradient(to top, #1c1c1c, #2c2c2c); box-shadow: inset 0 0 1px 1px #cecece, inset 0 0 0 3px #0c0d0d;
        }

.game-window-positioner .character_wrapper .stats-wrapper {
    background: linear-gradient(to top, #0000007d, #1c000480);
    border: 1px solid #390134;
    border-radius: 5px;
}

.border-window.transparent {
    box-shadow: 0 0 12px 0px #65005d;
}

        .extended-stats .scroll-pane h3 {
          border-bottom: 1px solid #2e2e2e; color: #878787; font-size: 11px; text-align: center; text-shadow: 0 0 5px #818181;
        }

        .extended-stats .scroll-pane .stats-section {
          text-shadow: 0 0 12px #818181; font-family; Arial; font-size: 11px; color: lightgray;
        }

        .extended-stats .scroll-pane .stat-row .value {
          float: right; font-weight: unset; font-size: 11px; color: white; text-shadow: 0 0 2px white;
        }

        .extended-stats .scroll-pane .bonuses .one-legend-bonus {
          text-align: center; color: #fa2070; margin-top: 8px; font-style: normal; font-size: 11px;
        }

        .layer.interface-layer .positioner.top .hud-container .map-data {
          color: #d1d1d1; text-shadow: 0 0 0px #202020; font-size: 10px;
        }

        .hero-data {
          color:#d1d1d1; font-size: 14px; font-family; Arial; text-shadow: 0 0 9px white;
        }

        \
        .layer.interface-layer .positioner.top .hud-container .hero-data .heroname {
          color:#d1d1d1;
        }

        .world-name {
          color:#d1d1d1; text-shadow: 0 0 0px #202020;
        }

        .crafting__bg {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url("https://i.imgur.com/t00FRvR.png"); background-size: contain;
        }

        .left-column .inner-wrapper .chat-tpl .input-wrapper {
          border-image: url(https://i.imgur.com/CkJiOJw.png) 0 111 0 104 fill repeat round
        }

        .bottom-panel {
          background: url(https://i.ibb.co/42fNSgF/image.png) -6px -73px no-repeat; filter: brightness(0.75);
        }

        .bottom-panel.end-game {
          background: url(https://i.ibb.co/42fNSgF/image.png) -6px -354px no-repeat
        }

        .bottom-panel .glass {
          background: url(https://i.ibb.co/42fNSgF/image.png) -8px -199px;
        }

        .bottom-panel .exp-bar-wrapper .exp-progress .overlay {
          background: url(https://i.ibb.co/42fNSgF/image.png) no-repeat -123px -184px;
        }

        .bottom-panel .exp-bar-wrapper .exp-progress.left .ribbon.end-game-ribbon, .bottom-panel .exp-bar-wrapper .exp-progress.right .ribbon.end-game-ribbon {
          background-image: url(https://i.ibb.co/42fNSgF/image.png)
        }

        .bottom-panel .battle-bars-wrapper .battle-bar .background {
          background: url(https://i.ibb.co/42fNSgF/image.png) -404px -199px
        }

        .bottom-panel .battle-bars-wrapper .battle-bar .overlay {
          background: url(https://i.ibb.co/42fNSgF/image.png) -409px -186px;
        }

        .layer.interface-layer .positioner.top .hud-container {
          background: url(https://i.ibb.co/42fNSgF/image.png) -7px 0
        }

        .layer.interface-layer .positioner.top .hud-container .hero-data .hero_class {
          background: url(https://i.ibb.co/SPqyJLw/image.png)
        }

        .layer.interface-layer .positioner.top .bg {
          background: url(https://i.imgur.com/jdrsmDr.png) 0 -61px repeat;
          border-bottom: 1px solid #390134;
      }

      .layer.interface-layer .positioner.bottom .bg {
        background: url(https://i.imgur.com/jdrsmDr.png) 0px 1px repeat;
        border-top: 1px solid #390134;
    }

        .left-column .inner-wrapper .chat-tpl .more-players-wrapper .more-players {
          background: url(https://i.imgur.com/TWrRN16.png) no-repeat -99px 0
        }

        .left-column .inner-wrapper .chat-tpl .more-players-wrapper .more-players:hover {
          background: url(https://i.imgur.com/TWrRN16.png) no-repeat -72px 0
        }

        .left-column .inner-wrapper .chat-tpl .right-tabs-wrapper .tab, .left-column .inner-wrapper .chat-tpl .tabs-wrapper .tab {
          background: url(https://i.imgur.com/TWrRN16.png) -36px -36px
        }

        .left-column .inner-wrapper .chat-tpl .tabs-pannel {
          border-image-source: url(https://i.imgur.com/16BV7pw.png);
        }

        .scroll-wrapper .scrollbar-wrapper .arrow-up, .scroll-wrapper.classic-bar .scrollbar-wrapper .arrow-up {
          background: url(https://i.ibb.co/DrqQyGW/image.png); background-position: -122px -167px;
        }

        .scroll-wrapper .scrollbar-wrapper .track .handle, .scroll-wrapper.classic-bar .scrollbar-wrapper .track .handle {
          background: url(https://i.ibb.co/DrqQyGW/image.png); background-position: -122px -185px;
        }

        .scroll-wrapper .scrollbar-wrapper .arrow-down, .scroll-wrapper.classic-bar .scrollbar-wrapper .arrow-down {
          background: url(https://i.ibb.co/DrqQyGW/image.png); background-position: -122px -230px
        }

        .auctions .scroll-wrapper .scrollbar-wrapper .track .handle, .border-window.transparent .scroll-wrapper .scrollbar-wrapper .track .handle, .dialogue-window .scroll-wrapper .scrollbar-wrapper .track .handle {
          background: url(https://i.ibb.co/DrqQyGW/image.png); background-position: -122px -185px;
        }

        .auctions .scroll-wrapper .scrollbar-wrapper .arrow-up, .border-window.transparent .scroll-wrapper .scrollbar-wrapper .arrow-up, .dialogue-window .scroll-wrapper .scrollbar-wrapper .arrow-up {
          background: url(https://i.ibb.co/DrqQyGW/image.png); background-position: -137px -202px;
        }

        .auctions .scroll-wrapper .scrollbar-wrapper .arrow-down, .border-window.transparent .scroll-wrapper .scrollbar-wrapper .arrow-down, .dialogue-window .scroll-wrapper .scrollbar-wrapper .arrow-down {
          background: url(https://i.ibb.co/DrqQyGW/image.png); background-position: -137px -230px
        }

        .left-column .inner-wrapper .chat-tpl .send-btn {
          background: url(https://i.ibb.co/DrqQyGW/image.png)
        }

        .game-window-positioner .inventory_wrapper .bags-navigation .item:hover {
          background: url(https://i.ibb.co/DrqQyGW/image.png) no-repeat 0 -105px
        }
        .game-window-positioner .inventory_wrapper {
            position: absolute;
            top: 200px;
            height: 205px;
            width: 100%;
            left: -4px;
        }
        .game-window-positioner .inventory_wrapper .bags-navigation .item.active .highlight {
          background: url(https://i.ibb.co/DrqQyGW/image.png) no-repeat 0 -105px
        }

        .left-column .inner-wrapper .chat-tpl .input-wrapper {
          border-image: url(https://i.imgur.com/CkJiOJw.png) 0 111 0 104 fill repeat round
        }

        .battle-controller .graphics .header-graphic {
          background: url(https://i.imgur.com/z5KKBjp.png) !important; filter:grayscale(1);
        }

        .battle-controller .graphics .timer-graphic {
          background: url(../img/gui/battle/battle-panel-timer.png) !important; filter:grayscale(1);
        }

        .battle-controller .graphics .middle-graphic {
          background: url(https://i.imgur.com/T3Ac8nK.png) repeat !important; filter:grayscale(1);
        }

        .battle-controller .battle-content .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat !important
        }

        .widget-button .icon {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -144px -11px
        }

        .battle-controller .graphics .bottom-graphic {
          background: url(https://i.imgur.com/95BqXpb.png) 0 -35px !important; filter:grayscale(1);
        }

        .additional-skill-panel {
          background: url(https://i.imgur.com/95BqXpb.png) !important; filter: grayscale(1);
        }

        .battle-msg.attack {
          background: linear-gradient(90deg, #29441d 1%, #27421b 49%, #202613 100%);
        }

        .battle-window .battlelog div.attack {
          background: url(https://i.imgur.com/QTtGPTu.png) repeat-y 0 0 !important
        }

        .battlelog .scroll-pane div.attack {
          background: url(https://i.imgur.com/QTtGPTu.png) repeat-y 0 0 !important
        }

        .battle-msg.attack2 {
          background: linear-gradient(90deg, #631b1c 1%, #631718 49%, #391312 100%);
        }

        .battle-window .battlelog div.attack2 {
          background: url(https://i.imgur.com/LSsmGJ9.png) repeat-y 0 0 !important
        }

        .battlelog .scroll-pane div.attack2 {
          background: url(https://i.imgur.com/LSsmGJ9.png) repeat-y 0 0 !important
        }

        .battle-msg.neu {
          background: linear-gradient(90deg, #613c17 1%, #6d431a 49%, #372212 100%);
        }

        .battle-window .battlelog div.neu {
          background: url(https://i.imgur.com/CAicdTl.png) repeat-y 0 0 !important
        }

        .battlelog .scroll-pane div.neu {
          background: url(https://i.imgur.com/CAicdTl.png) repeat-y 0 0 !important
        }

        .dialogue-window header .h_content {
          border-image: url(https://i.imgur.com/QjRD5oC.png) 0 51 fill repeat
        }

        .dialogue-window .background .left, .dialogue-window .background .right {
          background-image: url(https://i.imgur.com/2oVVs2J.png)
        }

        .dialogue-window .background .top {
          background-image: url(https://i.imgur.com/l8PViUb.png)
        }

        .dialogue-window .background .upper-left, .dialogue-window .background .upper-right {
          background-image: url(https://i.imgur.com/xLA65xd.png)
        }

        .border-window .header-label-positioner .header-label .left-decor {
          background: url(https://i.ibb.co/QjLD71p/image.png) -38px -2px
        }

        .border-window .header-label-positioner .header-label .right-decor {
          background: url(https://i.ibb.co/QjLD71p/image.png) -38px -2px; background-position: -91px -2px; left: auto; right: -52px;
        }

        .trade-window header .h_background .left {
          background: url(https://i.imgur.com/SGu19e0.png) -38px -2px; filter: grayscale(1);
        }

        .trade-window header .h_background .right {
          background: url(https://i.imgur.com/SGu19e0.png) -91px -2px; filter: grayscale(1);
        }

        .border-window .header-label-positioner .header-label {
          background: url(https://i.ibb.co/pZ53KBH/image.png)
        }

        .trade-window header .h_background .middle {
          filter: grayscale(1);
        }

        .layer.interface-layer .main-column.left-column .border {
          background: url(https://i.ibb.co/0r5fDQ3/image.png) -240px 0;
        }

        .layer.interface-layer .main-column.right-column {
          background: url(https://i.imgur.com/417vk66.png) -250px 105px;
          border-left: 1px solid #390134;
      }

      .layer.interface-layer .main-column.right-column .border {
        background: none;
    }

        .layer.interface-layer .main-column .extended-stats .border {
            border-left: 2px solid #390134;
        }

        .left-column .inner-wrapper .chat-tpl .chat-pannel {
          border-image: url(https://i.imgur.com/Cst5unI.png) 0 111 0 104 round round; background: #0f0f0f;
        }

        .left-column .inner-wrapper .chat-tpl .messages-wrapper .under-tab-decor {
          border-image: url(https://i.imgur.com/ZpqncDF.png) 14 111 0 104 fill repeat round;
        }

        .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper.scrollable .scrollbar-wrapper .background, .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper.scrollable .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .extended-stats .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .alerts-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background, .console-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background, .mAlert-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background, .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .auctions .scroll-wrapper .scrollbar-wrapper .background, .border-window.transparent .scroll-wrapper .scrollbar-wrapper .background, .dialogue-window .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .divide-panel .left-column .scroll-wrapper .scrollbar-wrapper .background, .divide-panel .right-column .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .console-window .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) left 1px top repeat;
        }

        .battle-controller .battle-content .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .quest-log .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .settings-window .section .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .addons-panel .left-column .scroll-wrapper .scrollbar-wrapper .background, .addons-panel .right-column .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .mail-box .mail-column .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat
        }

        .recovery-item .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .friend-enemy-list .column .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .clan .left-column .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) left 1px top repeat;
        }

        .clan .right-column .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) left 1px top repeat;
        }

        .showcase .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) left 1px top repeat;
        }

        .motel-window .table-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .gold-shop .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .skills-window .left-column .scroll-wrapper .scrollbar-wrapper .background, .skills-window .right-column .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat
        }

        .help-window2 .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .divide-edit-panel .scroll-wrapper.scrollable .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .divide-and-color-edit .scroll-wrapper.scrollable .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .left-grouped-list-and-right-description-window .left-column .scroll-wrapper .scrollbar-wrapper .background, .left-grouped-list-and-right-description-window .right-column .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .mc-addon .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) left 1px top repeat;
        }

        .stats-and-history .season-wnd .reward-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .achievement-panel .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .item-changer .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .conquer-stats .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) left 1px top repeat;
        }

        .change-outfit .scroll-wrapper .scrollbar-wrapper .background {
          background: url(https://i.imgur.com/vupxYDO.png) repeat;
        }

        .layer.interface-layer .main-column .extended-stats {
            background: rgb(0 0 0 / 82%);
        }

        .button.green, .pressed, .widget-button.green {
          background-image: linear-gradient(to top, #120011, #1a0004);
      }
      .button.green.window-is-open::before, .widget-button.green.window-is-open::before {
        background-image: linear-gradient(to top, #1a0004, #120011);
    }
        .button.green::before, .pressed, .widget-button.green::before {
          box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, .65);
        }

        .button.green, .widget-button.green, .pressed {
          box-shadow: inset 0 0 0px 1px #65005d, inset 0 0 0 1px #a40219;
      }

        .widget-button::after {
          box-shadow: 0 2px 0 1px #0c0d0d;
        }

        .button.black, .button:not(.no-hover):not(.disabled):hover:not(.active), .widget-button.black, .widget-button:not(.no-hover):not(.disabled):hover:not(.active), .button.small.green.pressed {
          background-image: linear-gradient(to top, #121212, #1f1f1f); box-shadow: inset 0 0 1px 1px #242424, inset 0 0 0 3px #0c0d0d;
        }

        .button.black::before, .button:not(.no-hover):not(.disabled):hover:not(.active)::before, .widget-button.black::before, .widget-button:not(.no-hover):not(.disabled):hover:not(.active)::before {
          box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, .9);
        }

        .button.black.active::before, .button:not(.no-hover):not(.disabled):hover:not(.active).active::before, .widget-button.black.active::before, .widget-button:not(.no-hover):not(.disabled):hover:not(.active).active::before {
          box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, .9);
        }

        .border-window {
          border-image: url(https://i.ibb.co/p09DS6Q/image.png) 32 20 fill repeat;
        }

        .bottom-panel-pointer-bg {
          background: url(https://i.ibb.co/mXk620q/image.png);
        }

.border-window.transparent .border-image {
    background: rgba(15, 15, 15, 0.7);
    box-shadow: 0 0 0 1px #410527, 0 0 0 2px #410527, 0 0 0 3px #410527, 2px 2px 3px 3px #410527;
}

        .border-window.transparent .search-wrapper {
          border-top: 1px solid rgba(15, 15, 15, .7);
        }

        .bottom-panel-pointer-bg {
          background: url(https://i.ibb.co/mXk620q/image.png);
        }

        .layer.interface-layer .mini-map .mini-map-map .graphic {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .quest-log .scroll-wrapper .scroll-pane .middle-graphics {
          background: url(https://i.ibb.co/G5ySkDp/image.png);
        }

        .loot-window .middle-graphics {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .recovery-item .scroll-wrapper .scroll-pane .middle-graphics {
          background: url(https://i.ibb.co/G5ySkDp/image.png);
        }

        .recovery-item .scroll-wrapper .scroll-pane .paper-graphics {
          background: url(https://i.ibb.co/G5ySkDp/image.png);
        }

        .friend-enemy-list .column .scroll-wrapper .scroll-pane .middle-graphics {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .auctions-summary .middle-graphics {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .premium-panel .premium-graphic {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .stamina-shop .background-graphic {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill round;
        }

        .depo .depo-graphic-background {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .gold-shop .scroll-wrapper .scroll-pane .middle-graphics {
          background: url(https://i.ibb.co/G5ySkDp/image.png);
        }

        .divide-edit-panel .scroll-wrapper .scroll-pane .middle-graphic {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .divide-and-color-edit .scroll-wrapper .scroll-pane .middle-graphic {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .who-is-here-edit .con .middle-graphics {
          background: url(https://i.ibb.co/G5ySkDp/image.png); background-size: contain;
        }

        .window-list-edit .con .middle-graphics {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 10 fill round
        }

        .promo-window .background-graphic {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .chests-window .brown-background {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat
        }

        .chests-animation .middle-graphics {
          background: url(https://i.ibb.co/G5ySkDp/image.png);
        }

        .matchmaking-summary .middle-graphics {
          background: url(https://i.ibb.co/G5ySkDp/image.png);
        }

        .matchmaking-panel .middle-graphics {
          filter: grayscale(1);
        }

        .stats-and-history .season-wnd .middle-wood {
          background: url(https://i.ibb.co/G5ySkDp/image.png)
        }

        .achievement-panel .middle-graphics {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 10 fill round
        }

        .item-changer .scroll-wrapper .scroll-pane .middle-graphics {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 10 fill repeat
        }

        .news-panel .middle-graphics {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 10 fill round
        }

        .news-panel .news-content .crazy-bar {
          background: url(https://i.ibb.co/G5ySkDp/image.png)
        }

        .pre-premium-panel .brown-background {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat
        }

        .conquer-stats .middle-graphics {
          border-image: url(https://i.ibb.co/G5ySkDp/image.png) 0 11 fill repeat;
        }

        .change-outfit .middle-graphics {
          background: url(https://i.ibb.co/G5ySkDp/image.png); background-size: contain;
        }

        .change-outfit .crazy-bar {
          background: url(https://i.ibb.co/G5ySkDp/image.png)
        }

        .quest-box .info-wrapper {
          background: url(https://i.ibb.co/bPx5Cxk/image.png); background-size: 100% 100%;
        }

        .settings-window .bottom-bar {
          background: url(https://i.ibb.co/bPx5Cxk/image.png); background-size: auto; background-size: cover;
        }

        .friend-enemy-list .amound-wrapper {
          background: url(https://i.ibb.co/bPx5Cxk/image.png); background-size: 100% 100%
        }

        .friend-enemy-list .bottom-friend-panel {
          background: url(https://i.ibb.co/bPx5Cxk/image.png); background-size: 100% 100%
        }

        .matchmaking-summary .summary-content .wood-bar {
          border-style: solid; border-width: 3px 3px; border-image: url(https://i.ibb.co/bPx5Cxk/image.png) 3 3 fill stretch;
        }

        .news-panel .news-content .section-header {
          background: url(https://i.ibb.co/bPx5Cxk/image.png); background-size: 100% 100%
        }

        .change-outfit .preview-outfit .outfit-header, .change-outfit .your-outfit .outfit-header {
          border-style: solid; border-width: 3px 3px; border-image: url(https://i.ibb.co/bPx5Cxk/image.png) 3 3 fill stretch;
        }

        .game-window-positioner .character_wrapper .equipment-wrapper {
          background: url(https://i.ibb.co/FwnFJ87/image.png) 0 -229px;
        }

        .game-window-positioner .inventory_wrapper .bags-navigation {
          background: url(https://i.ibb.co/FwnFJ87/image.png) no-repeat 0 -140px
        }

        .game-window-positioner .inventory_wrapper .bags-navigation .item {
          background: url(https://i.ibb.co/j4QjfsB/image.png) no-repeat -36px -181px
        }

        .game-window-positioner .inventory_wrapper .inventory-grid-bg {
          background: url(https://i.ibb.co/FwnFJ87/image.png) no-repeat -175px 0;
        }

        .dialogue-window .content .npc-message .rew_item .container {
          background: url(https://i.ibb.co/j4QjfsB/image.png) -178px -264px
        }

        .show-eq .show-eq-bck .table-wrapper .right-side .other-items-wrapper .other-items {
          background: url(https://i.ibb.co/j4QjfsB/image.png) 0 -229px
        }

        .eq-items-set {
          background: url(https://i.ibb.co/j4QjfsB/image.png)
        }

        .game-window-positioner .character_wrapper .stats-wrapper {
          background: none;
        }

        .shop-wrapper .shop-content.normal-shop-zl {
          background: url(https://i.imgur.com/0nSIMcJ.png) 0 -34px;
        }

        .shop-wrapper .shop-content.pet-shop-sl {
          background: url(https://i.imgur.com/DnBfH5k.png) 0 -34px;
        }

        .shop-wrapper .shop-content.normal-shop-sl {
          background: url(https://i.imgur.com/DnBfH5k.png) 0 -34px;
        }

        .shop-wrapper .shop-content.pet-shop-zl {
          background: url(https://i.imgur.com/DnBfH5k.png) 0 -34px;
        }

        .border-window .content {
          background: url(https://i.ibb.co/rfy5Fzy/image.png); color: white; text-shadow: 0 0 6px black;
        }

        .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .board-graphic {
          border-style: solid; border-width: 7px 5px; border-image: url(https://i.imgur.com/t2kPAmT.png) 7 5 fill repeat
        }

        .quest-box .quest-content {
          background: url(https://i.imgur.com/tj4Rsh3.png); background-size: cover;
        }

        .recovery-item .info-3 {
          background: url(https://i.imgur.com/tj4Rsh3.png); background-size: cover
        }

        .depo .filter-section .filter-section-graphic {
          background: url(https://i.imgur.com/tj4Rsh3.png); background-size: cover;
        }

        .depo .green-bar-section {
          background: url(https://i.imgur.com/tj4Rsh3.png); background-size: cover;
        }

        .addons-panel .main-header {
          background: url(https://i.ibb.co/Mp7J748/image.png)
        }

        .left-grouped-list-and-right-description-window .main-header {
          background: url(https://i.ibb.co/Mp7J748/image.png)
        }

        .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane, .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane {
          border-style: solid; border-width: 0 30px; border-image: url(https://i.ibb.co/GHQ2WdK/image.png) 0 30 fill repeat
        }

        .additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane::after, .additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane::after {
          border-style: solid; border-width: 0 30px; border-image: url(https://i.ibb.co/GHQ2WdK/image.png) 0 30 fill repeat
        }

        .addons-panel .left-column .middle-left-column-graphics {
          background: url(https://i.ibb.co/GHQ2WdK/image.png)
        }

        .left-grouped-list-and-right-description-window .left-column .middle-left-column-graphics {
          background: url(https://i.ibb.co/GHQ2WdK/image.png)
        }

        .addons-panel .right-column .middle-right-column-graphics {
          background: url(https://i.ibb.co/9w4tSVx/image.png)
        }

        .left-grouped-list-and-right-description-window .right-column .middle-right-column-graphics {
          background: url(https://i.ibb.co/9w4tSVx/image.png)
        }

        .addons-panel .left-column .bottom-left-column-graphics {
          background: url(https://i.ibb.co/fr0RcnZ/image.png)
        }

        .left-grouped-list-and-right-description-window .left-column .bottom-left-column-graphics {
          background: url(https://i.ibb.co/fr0RcnZ/image.png)
        }

        .border-window .bottom-bar {
          background: url(https://i.ibb.co/CtcLVKK/image.png); background-size: 100% 100%
        }

        .divide-panel .bottom-part .bottom-panel-graphics {
          border-style: solid; border-width: 0 59px; border-image: url(https://i.ibb.co/CtcLVKK/image.png) 0 59 fill stretch;
        }

        .addons-panel .bottom-recipes-panel .bottom-panel-graphics {
          background: url(https://i.ibb.co/CtcLVKK/image.png)
        }

        .mail-box .bottom-mail-panel .bottom-panel-graphics {
          background: url(https://i.ibb.co/CtcLVKK/image.png)
        }

        .recovery-item .recover-bottom-panel {
          background: url(https://i.ibb.co/CtcLVKK/image.png); background-size: 100% 100%
        }

        .premium-panel .premium-bottom-panel {
          background: url(https://i.ibb.co/CtcLVKK/image.png); background-size: 100% 100%
        }

        .stamina-shop .footer .bottom-panel-graphics {
          background: url(https://i.ibb.co/CtcLVKK/image.png)
        }

        .gold-shop .footer .bottom-panel-graphics {
          background: url(https://i.ibb.co/CtcLVKK/image.png)
        }

        .skills-window .bottom-part .bottom-panel-graphics {
          border-style: solid; border-width: 0 59px; border-image: url(https://i.ibb.co/CtcLVKK/image.png) 0 59 fill stretch;
        }

        .divide-edit-panel .bottom-bar {
          background: url(https://i.ibb.co/CtcLVKK/image.png); background-size: 100% 100%
        }

        .left-grouped-list-and-right-description-window .bottom-row-panel .bottom-panel-graphics {
          background: url(https://i.ibb.co/CtcLVKK/image.png)
        }

        .promo-window .promo-bottom-panel {
          background: url(https://i.ibb.co/CtcLVKK/image.png); background-size: 100% 100%
        }

        .chests-window .chests-bottom-panel {
          background: url(https://i.ibb.co/CtcLVKK/image.png); background-size: 100% 100%
        }

        .matchmaking-summary .bottom-panel-graphics {
          background: url(https://i.ibb.co/CtcLVKK/image.png)
        }

        .matchmaking-panel .bottom-panel-graphics {
          background: url(https://i.ibb.co/CtcLVKK/image.png)
        }

        .achievement-panel .bottom-panel-graphics {
          background: url(https://i.ibb.co/CtcLVKK/image.png)
        }

        .item-changer .filter-wrapper {
          background: url(https://i.ibb.co/CtcLVKK/image.png) 1px -4px; background-size: 100% 100%
        }

        .item-changer .bottom-item-changer-panel .bottom-panel-graphics {
          border-style: solid; border-width: 0 59px; border-image: url(https://i.ibb.co/CtcLVKK/image.png) 0 59 fill stretch
        }

        .pre-premium-panel .chests-bottom-panel {
          background: url(https://i.ibb.co/CtcLVKK/image.png); background-size: 100% 100%
        }

        .change-outfit .bottom-change-outfit-panel .bottom-panel-graphics {
          border-style: solid; border-width: 0 59px; border-image: url(https://i.ibb.co/CtcLVKK/image.png) 0 59 fill stretch;
        }

        .addons-panel .right-column .paper-graphics {
          border-style: solid; border-width: 63px 27px 27px; border-image: url(https://i.ibb.co/N3ffJJT/image.png) 63 27 27 fill round;
        }

        .recovery-item .scroll-wrapper .scroll-pane .paper-graphics {
          border-style: solid; border-width: 63px 27px 27px; border-image: url(https://i.ibb.co/N3ffJJT/image.png) 63 27 27 fill repeat
        }

        .left-grouped-list-and-right-description-window .right-column .paper-graphics {
          border-style: solid; border-width: 63px 27px 27px; border-image: url(https://i.ibb.co/N3ffJJT/image.png) 63 27 27 fill round;
        }

        .item-changer .scroll-wrapper .scroll-pane .paper-graphics {
          border-style: solid; border-width: 63px 27px 27px; border-image: url(https://i.ibb.co/N3ffJJT/image.png) 63 27 27 fill repeat;
        }

        .console-layer .border-window .content {
          border-style: solid; border-width: 0 12px; border-image: url(https://i.imgur.com/hStnH39.png) 0 10 repeat
        }

        .settings-window .section .scroll-wrapper .scroll-pane .graphic-background {
          border-style: solid; border-width: 27px 11px; border-image: url(https://i.imgur.com/hStnH39.png) 27 11 fill repeat; background-size: contain
        }

        .mail-box .mail-column .middle-graphic {
          border-style: solid; border-width: 27px 11px; border-image: url(https://i.imgur.com/hStnH39.png) 27 11 fill repeat; background-size: contain;
        }

        .clan .right-column {
          border-style: solid; border-width: 0 11px; border-image: url(https://i.imgur.com/hStnH39.png) 0 9 repeat
        }

        .clan-list-find-panel {
          border-style: solid; border-width: 0 11px; border-image: url(https://i.imgur.com/hStnH39.png) 0 9 repeat
        }

        .showcase .card-content {
          border-style: solid; border-width: 0 11px; border-image: url(https://i.imgur.com/hStnH39.pngg) 0 9 repeat;
        }

        .auctions .right-column {
          border-style: solid; border-width: 0 11px; border-image: url(https://i.imgur.com/hStnH39.png) 0 9 repeat
        }

        .skills-window .left-column .middle-graphic, .skills-window .right-column .middle-graphic {
          border-style: solid; border-width: 0 11px; border-image: url(https://i.imgur.com/hStnH39.png) 0 11 fill round; background-size: contain
        }

        .help-window2 .scroll-wrapper .scroll-pane .graphic-background {
          border-style: solid; border-width: 27px 11px; border-image: url(https://i.imgur.com/hStnH39.png) 27 11 fill repeat; background-size: contain
        }

        .mc-addon-window .content {
          border-style: solid; border-width: 0 12px; border-image: url(https://i.imgur.com/hStnH39.png) 0 10 repeat
        }

        .choose-outfit .middle-graphics {
          border-style: solid; border-width: 0 11px; border-image: url(https://i.imgur.com/hStnH39.png) 0 11 fill round; background-size: contain;
        }

        .settings-window h2 {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 100%;
        }

        .settings-window .hot-keys-config .scroll-wrapper .static-bar-table tr {
          background: url(https://i.imgur.com/WOtlBIJ.png)
        }

        .mail-box .content-header {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 100%;
        }

        .recovery-item .scroll-wrapper .static-bar-table .table-header {
          background: url(https://i.imgur.com/WOtlBIJ.png)
        }

        .card-content .table-header-wrapper {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: auto auto; background-size: 788px 27px;
        }

        .clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-0, .clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-1, .clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-2 {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 27px;
        }

        .clan-list-find-panel .clan-list-butts-wrapper {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 100%
        }

        .clan-bless-content .header-bar, .clan-diplomacy-content .header-bar, .clan-edit-page-content .header-bar, .clan-history-content .header-bar, .clan-manage-content .header-bar, .clan-official-page-content .header-bar, .clan-priv-page-content .header-bar, .clan-quests-content .header-bar, .clan-rank-edit-content .header-bar, .clan-recruit-content .header-bar, .clan-skills-content .header-bar, .clan-treasury-content .header-bar {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 27px;
        }

        .clan-other-recruit-content .clan-list-butts-wrapper, .clan-recruit-content .clan-list-butts-wrapper {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 100%;
        }

        .clan-other-recruit-content .clan-recruit-header-0, .clan-other-recruit-content .clan-recruit-header-1, .clan-other-recruit-content .clan-recruit-header-2, .clan-recruit-content .clan-recruit-header-0, .clan-recruit-content .clan-recruit-header-1, .clan-recruit-content .clan-recruit-header-2 {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 27px;
        }

        .clan-treasury-content .scroll-wrapper .scroll-pane .history-table tr:first-child {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 788px 27px;
        }

        .clan-manage-content .rank-edit-table tr:first-child {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 788px 27px
        }

        .showcase .header-bar {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: auto auto; background-size: 100% 27px;
        }

        .amount-label {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 27px;
        }

        .auctions .right-column .main-list .header-list {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 788px 25px;
        }

        .skills-window .right-column .maku-wood {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 100%;
        }

        .MBEditor .buttons-wrapper {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 100%;
        }

        .help-window2 .scroll-wrapper .scroll-pane .content-header {
          background: url(https://i.imgur.com/WOtlBIJ.png); background-size: 100% 100%;
        }

        .item-changer .scroll-wrapper .static-bar-table .table-header {
          background: url(https://i.imgur.com/WOtlBIJ.png)
        }

        .clan .left-column .clan-list-repeat {
          background: url(https://i.imgur.com/4nLbHc3.png) repeat
        }

        .clan-treasury-content .green-box {
          padding: 12px 30px 8px; background: url(https://i.imgur.com/eAtXPG7.png) repeat-y; background-size: 100%; color: #E6D6BF; font-weight: bold; filter:grayscale(1);
        }

        .clan-other-recruit-content .green-box, .clan-recruit-content .green-box {
          background: url(https://i.imgur.com/eAtXPG7.png) repeat-y; background-size: 100%; color: #E6D6BF; filter:grayscale(1);
        }

        .clan-manage-content .green-box {
          background: url(https://i.imgur.com/eAtXPG7.png) repeat-y; background-size: 100%; color: #E6D6BF; filter:grayscale(1);
        }

        .clan-diplomacy-content .green-box {
          background: url(https://i.imgur.com/eAtXPG7.png) repeat-y; background-size: 100%; filter:grayscale(1);
        }

        .clan-history-content .chose-show {
          background: url(https://i.imgur.com/eAtXPG7.pngg) repeat-y; background-size: 100%
        }

        .card-content .green-box input.default {
          color: #E6D6BF; border: 1px solid rgba(15, 15, 15, .7); filter:grayscale(1);
        }

        .card-content .table-header {
          color: #E6D6BF; font-weight: bold; text-shadow: 1px 1px black
        }

        .loot-window .bottom-wrapper .bottom-graphic {
          background: url(https://i.imgur.com/nqZURpJ.png);
        }

        .auctions-summary .bottom-wrapper .bottom-graphic {
          background: url(https://i.imgur.com/nqZURpJ.png);
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item {
          background: url(https://i.imgur.com/QgrjPrz.png);
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.chest {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -2px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.upgrades {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -2px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.stamina {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -2px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.gold-shop {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -2px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.boots {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -93px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.helmets {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -93px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.gloves {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -93px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.armor {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -93px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.necklaces {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -184px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.rings {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -184px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.arrows {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -184px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.teleports {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -184px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.consumtable {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -275px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.pets {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -275px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.outfits {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -275px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.bags {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -275px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.potions {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -366px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.ornamentation {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -366px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.sales {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -366px
        }

        .premium-panel .product-kind .premium-item-wrapper .premium-item.blessing {
          background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -366px
        }

        .premium-panel .more-sl.pl:hover {
          background: url(https://i.imgur.com/QgrjPrz.png) -108px -577px
        }

        .premium-panel .promo-package.pl:hover {
          background: url(https://i.imgur.com/QgrjPrz.png) -328px -800px
        }

        .premium-panel .promo-package.en:hover {
          background: url(https://i.imgur.com/QgrjPrz.png) -328px -800px
        }

        .premium-panel .close.pl:hover {
          background: url(https://i.imgur.com/QgrjPrz.png) -4px -555px
        }

        .chests-window .chests-choice-wrapper .promo-chest {
          background: url(https://i.imgur.com/gNO2C2B.png) -436px 2px
        }

        .chests-window .chests-choice-wrapper .promo-chest .img-wrapper .chest-img.black-dragon-chest-g, .chests-window .chests-choice-wrapper .promo-chest .txt-wrapper .chest-img.black-dragon-chest-g {
          background: url(https://i.imgur.com/gNO2C2B.png) -575px -192px
        }

        .chests-window .chests-choice-wrapper .promo-chest .img-wrapper .chest-img.red-dragon-chest-g, .chests-window .chests-choice-wrapper .promo-chest .txt-wrapper .chest-img.red-dragon-chest-g {
          background: url(https://i.imgur.com/gNO2C2B.png) -436px -192px
        }

        .pre-premium-panel .tiles-wrapper .pre-premium-panel-tile {
          background: url(https://i.imgur.com/gNO2C2B.png) -299px 0;
        }

        .pre-premium-panel .tiles-wrapper .pre-premium-panel-tile .graph.sl-cl {
          background: url(https://i.imgur.com/gNO2C2B.png) -20px 0
        }

        .pre-premium-panel .tiles-wrapper .pre-premium-panel-tile .graph.shop-cl {
          background: url(https://i.imgur.com/gNO2C2B.png) -165px 0
        }

        .pre-premium-panel .tiles-wrapper .pre-premium-panel-tile .graph.chest-cl {
          background: url(https://i.imgur.com/gNO2C2B.png) -14px -141px
        }

        .pre-premium-panel .tiles-wrapper .pre-premium-panel-tile .graph.for-you-cl {
          background: url(https://i.imgur.com/gNO2C2B.png) -161px -143px
        }

        .layer.interface-layer .positioner.top .hud-container .map_ball {
          background: url(https://i.ibb.co/SPqyJLw/image.png);
        }

        .layer.interface-layer .positioner.bottom .bg-additional-widget-left {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -177px -598px;
        }

        .layer.interface-layer .positioner.bottom .bg-additional-widget-right {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -177px -598px;
        }

        .layer.interface-layer .mini-map .mini-map-panel {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -413px -498px
        }

        .bottom-panel .lagmeter .lag {
          background: url(https://i.ibb.co/SPqyJLw/image.png);
        }

        .game-window-positioner .character_wrapper .equipment-wrapper .skill-switch {
          background: url(https://i.ibb.co/SPqyJLw/image.png);
        }

        .game-window-positioner .character_wrapper .stats-wrapper .stats-list li .icon {
          background: url(https://i.ibb.co/SPqyJLw/image.png);
        }

        .game-window-positioner .character_wrapper .pvp-btn {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -430px -369px;
        }

        .right-column .inner-wrapper .battle-set-wrapper {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -517px -709px
        }

        .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-2.active {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -428px -709px
        }

        .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-2:hover {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -491px -709px
        }

        .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-1.active {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -409px -709px
        }

        .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-1:hover {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -472px -709px
        }

        .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-0.active {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -390px -709px
        }

        .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-0:hover {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -453px -709px
        }

        .border-window .close-button-corner-decor {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -380px -55px; filter: brightness(0.5);
        }

        .border-window .close-button-corner-decor .close-button {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -263px -79px
        }

        .skill-req-wrapper {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -592px -160px
        }

        .profs-icon {
          background: url(https://i.ibb.co/SPqyJLw/image.png);
        }

        .battle-summary .bottom-bar-wrapper .bottom-bar {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -13px -539px
        }

        .loot-window .bottom-bar-wrapper .bottom-bar {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -13px -539px
        }

        .loot-window .items-wrapper .loot-item-wrapper {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -231px -274px;
        }

        .shop-wrapper .shop-content .for-you-plug {
          background: url(https://i.ibb.co/SPqyJLw/image.png) 1px -709px
        }

        .mail-box .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .footer .atachment-exist {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -800px -79px
        }

        .mail-box .new-message .footer .atachments .foot-item .send-item {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -800px -79px;
        }

        .party .list .party-member.stasis .table-wrapper .stasis-icon {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -540px -337px
        }

        .party .exp-percent::before {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -838px -667px;
        }

        .clan .left-column .clan-info {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -14px -244px
        }

        .clan .left-column .clan-list-bottom {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -228px -247px
        }

        .clan-members-content .scroll-wrapper .scroll-pane .clan-member .add-to-group .button .add-bck {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -334px -81px
        }

        .quest-bring-item .item-wrapper {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -800px -79px;
        }

        .one-clan-skill .skill-clan-info .skill-progress .skill-points-wrapper .use-lvl {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -490px -336px
        }

        .one-clan-skill .skill-clan-info .skill-progress .skill-slots-wrapper .empty-lvl.right {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -546px -315px
        }

        .one-clan-skill .skill-clan-info .skill-progress .skill-slots-wrapper .empty-lvl.middle {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -518px -315px
        }

        .one-clan-skill .skill-clan-info .skill-progress .skill-slots-wrapper .empty-lvl.left {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -490px -315px
        }

        .auctions .left-column .container .header .list .cl-handler .cl-button {
          background: url(https://i.ibb.co/SPqyJLw/image.png); background-position: -772px -558px;
        }

        .auctions .right-column .item-handler .container {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -800px -79px
        }

        .depo .bottom-section .cards-menu .right-arrow:hover {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -883px -517px
        }

        .depo .bottom-section .cards-menu .right-arrow {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -867px -517px
        }

        .depo .bottom-section .cards-menu .left-arrow:hover {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -834px -517px
        }

        .depo .bottom-section .cards-menu .left-arrow {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -850px -517px
        }

        .item-slot {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -800px -79px;
        }

        #loggedPriceNotif {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -763px -365px;
        }

        #consoleNotif {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -763px -365px;
        }

        #mailnotifier {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -762px -410px
        }

        .ability-points .ability-content .ability-row .img-wrapper .img {
          background: url(https://i.ibb.co/SPqyJLw/image.png);
        }

        .help-window .scroll-wrapper .scroll-pane .help-legend-section .prof-icon {
          background: url(https://i.ibb.co/SPqyJLw/image.png);
        }

        .help-profs-and-items .profs-content .help-one-prof .first-line .symbol {
          background: url(https://i.ibb.co/SPqyJLw/image.png);
        }

        .who-is-here .scroll-wrapper .scroll-pane .one-other .center .stasis.active {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -540px -337px
        }

        .promo-window .items-wrapper .shop-promo-item {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -299px -712px;
        }

        .matchmaking-panel .all-pages .choose-eq .eq-items-set .skill-set.skill-set-3 {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -141px -600px
        }

        .matchmaking-panel .all-pages .choose-eq .eq-items-set .skill-set.skill-set-2 {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -110px -600px
        }

        .matchmaking-panel .all-pages .choose-eq .eq-items-set .skill-set.skill-set-1 {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -79px -600px
        }

        .matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-border.unavailable-level-last, .matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-slot.unavailable-level-last {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -85px -663px
        }

        .matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-border.unavailable-level, .matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-slot.unavailable-level {
          background: url(https://i.ibb.co/SPqyJLw/image.png) 1px -663px
        }

        .matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-border.available-level-last, .matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-slot.available-level-last {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -128px -663px
        }

        .matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-border.available-level, .matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-slot.available-level {
          background: url(https://i.ibb.co/SPqyJLw/image.png) -42px -663px
        }

        .item-changer-group .background-grid .background-grid-element {
          background: url(https://i.ibb.co/SPqyJLw/image.png) repeat -14px -444px;
        }

        .cost-item, .item-changer-group .grid .require-item, .require-and-receive-item .require-wrapper .require-wrapper-align .require-item {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -14px -444px
        }

        .cost-item.can-choose-item, .item-changer-group .grid .require-item.can-choose-item, .require-and-receive-item .require-wrapper .require-wrapper-align .require-item.can-choose-item {
          background: url(https://i.ibb.co/SPqyJLw/image.png) repeat -99px -444px
        }

        .cost-item.can-choose-item:hover, .item-changer-group .grid .require-item.can-choose-item:hover, .require-and-receive-item .require-wrapper .require-wrapper-align .require-item.can-choose-item:hover {
          background: url(https://i.ibb.co/SPqyJLw/image.png) repeat -136px -444px
        }

        .require-and-receive-item .recive-wrapper .recive-wrapper-align .recive-item {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -53px -444px;
        }

        .news-panel .news-content .right-arrow:hover, .news-panel .news-content .right-news-btn:hover {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -668px -313px
        }

        .news-panel .news-content .right-arrow, .news-panel .news-content .right-news-btn {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -618px -313px
        }

        .news-panel .news-content .left-arrow:hover, .news-panel .news-content .left-news-btn:hover {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -691px -313px
        }

        .news-panel .news-content .left-arrow, .news-panel .news-content .left-news-btn {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -641px -313px
        }

        .loot-preview .item-container {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat -857px -828px
        }

        .poll__answers-item [type=radio]+label {
          background: url(/img/gui/buttony.png) -801px -80px;
        }

        .popup-menu .menu-item.cooldown-disabled {
          background-color: #101010 !important; box-shadow: inset 0px 0px 9px 2px #a9a8a89c;  !important;
        }

        \
 .popup-menu .menu-item {
          border-radius: 4px; border: 1px solid rgba(15, 15, 15, .7); background-color: rgba(15, 15, 15, .7);
        }

        .popup-menu .menu-item:hover:not(.label):not(.disabled):not(.cooldown-disabled):not(.one-step-skill-menu) {
          border: 1px solid rgba(15, 15, 15, .7); background-color: rgba(35, 35, 35, .9)
        }

        .popup-menu {
          box-shadow: 0 0 14px 3px #000000 inset, 0 0 20px 0px #545454, 0 0 5px 4px #000000; background-color: rgb(68 68 68 / 50%); border: 1px solid #040404;
        }

        \
 .alerts-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option, .console-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option, .mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option, .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option {
          border-radius: 4px; border: 1px solid #383838; background-color: rgba(18, 18, 18, .9);
        }

        .alerts-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled), .console-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled), .mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled), .mAlert-mobile-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled) {
          border: 1px solid #383838; background-color: rgba(18, 18, 18, .9)
        }

        .clan-treasury-content .scroll-wrapper .scroll-pane .right-part .outfit-content {
          background: url(https://i.ibb.co/SPqyJLw/image.png) no-repeat 0 -866px;
        }

        .depo .find-and-manage-money-section .right-part .money-info {
          border-style: solid; border-width: 1px 1px 23px 11px; border-image: url(https://i.imgur.com/D5XZTb2.png) 1 1 23 11 fill
        }

        .depo .find-and-manage-money-section .left-part .manage-money-wrapper .manage-money-wrapper-graphic {
          border-style: solid; border-width: 1px 1px 23px 1px; border-image: url(https://i.imgur.com/k6EB8l7.png) 1 1 23 1 fill;
        }

        .depo .bottom-section .actions-bar-content .actions-bar-background {
          border-style: solid; border-width: 1px 1px 23px 1px; border-image: url(https://i.imgur.com/k6EB8l7.png) 1 1 23 1 fill
        }

        .depo .item-section .slots-background {
          background-color:black; filter:brightess(0.5);
        }

        .auctions .left-column {
          border-style: solid; border-width: 21px 33px 9px; border-image: url(https://i.imgur.com/dLdeLdk.png) 21 33 9 fill repeat
        }

        .btn-min:not(.disabled):hover {
          background: #3d3d3d
        }

        .btn-min {
          background: #000000; border-color: black; box-shadow: inset 0px 0px 7px 1px black; font-size: 14px; line-height:18px
        }

        \
 .tw-list-item {
          background: rgba(15, 15, 15, .5); box-shadow: 0 0 0 1px rgba(15, 15, 15, .9) inset;
        }

        .tip-wrapper {
          box-shadow: 0 0 0 0 #2b282a, 0 0 0 1px #353131, 0 0 0 2px #191311, 0 0 0 3px #2b2727, 0 0 0 4px rgba(15, 15, 15, .6), 0 0 0 5px rgba(15, 15, 15, 78), 0 0 0 6px #5a585b, 0 0 0 7px #2c2625;
        }

        .tip-wrapper .content {
          padding: 5px; background: rgb(15 15 15 / 88%); word-break: break-word; box-shadow: 0px 1px 13px 4px rgb(0 0 0); font-family; Arial;
        }

        .tip-wrapper[data-type=t_item] .tip-section s-4 {
          color: #0093ff; text-shadow: 0 0 3px #008bf1; text-align: center !important;
        }

        .tip-wrapper[data-type="t_item"] .item-tip-section.s-5 {
          color: #c83fff; text-align: center;
        }

        .tip-wrapper[data-type=t_item] i.looter {
          color: #929b92; margin: 3px 0; text-align: center; font-size: 10.2px !important; text-shadow: 0 0 6px #c000ff;
        }

        .tip-wrapper[data-type=t_item] i.looter {
          color: #929b92; margin: 3px 0; text-align: center; font-size: 10.2px !important; text-shadow: 0 0 6px #c000ff;
        }

        .tip-wrapper[data-type="t_item"] .item-head {
          background: rgb(0 0 0 / 3%);
        }

        .tip-wrapper[data-type=t_item] .item-head {
          border: 1px solid #0c0d0d66; border-radius: 2px;
        }

        .tip-wrapper[data-type=t_item] .item-head .head-icons .cl-icon {
          border: 1px solid rgba(15, 15, 15, .3);
        }

        .tip-wrapper[data-type=t_item] .item-tip-section {
          border-bottom: 1px solid rgba(15, 15, 15, .5);
        }

        .tip-wrapper .content .info-wrapper .nick {
          border: 1px solid rgba(0, 0, 0, 0.89); border-radius: 2px; background: rgba(15, 15, 15, .1);
        }

        .tip-wrapper[data-type=t_other] .line {
          background: url(https://i.imgur.com/XifzayY.png)
        }

        .tip-wrapper[data-type=t_item] .item-head .legendary, .tip-wrapper[data-type=t_item] .item-tip-section .legendary {
          color: #b700ff; filter: drop-shadow(1px 4px 6px black);
        }

        @keyframes pulse-green {
          0%, 100% {
            background: rgba(94, 94, 94, 0)
          }

          50% {
            background: rgba(63, 3.3, .3)
          }
        }

        @keyframes btnMinBlink {
          0%, 100% {
            background: rgb(195, 156, 71)
          }

          50% {
            background: rgb(230, 183, 83)
          }
        }

        .skills-window .left-column .list-label-wrapper .list-label .label {
          color: beige;
        }

        .clan-treasury-content .table-header {
          background: url(https://i.imgur.com/WOtlBIJ.png);
        }

        .popup-menu .menu-item.disabled {
          background-color: rgb(35, 35, 35);
        }

        .battle-controller .skill-hider {
          background: url(https://i.imgur.com/Sts7hIS.png);
        }

        .message .inner {
          color:white; font-size:15px;
        }

        .enhance__progress--current {
          background: #730187; z-index: -1;
        }

        .enhance__progress--preview {
          background: #de6cf5; z-index: -2;
        }

        .enhance__reagents {
          width: 166px; height: 166px; margin: 40px auto 0; background: url("https://i.ibb.co/j4QjfsB/image.png") no-repeat -178px -3px; osition: relative; box-shadow: 0 0 0 1px #070807, 0 0 0 2px #656161, 0 0 0 3px #070807;
        }

        .enhance__r-item {
          width: 34px; height: 34px; background: url("https://i.ibb.co/j4QjfsB/image.png") no-repeat -178px -3px; padding: 1px; box-sizing: border-box;
        }

        .bonus-selector-wnd__bg {
          background: url(https://i.ibb.co/G5ySkDp/image.png); background-size: contain; position: absolute; top: -2px; left: -10px; right: -10px; bottom: -6px;
        }

        .auction-but.violet {
          background: linear-gradient(#515151, #515151); border: 1px solid #515151;
        }

        .auction-but.violet:hover {
          background: linear-gradient(#515151, #515151);
        }

        .bottom-panel .exp-bar-wrapper .exp-progress .progress .inner {
          background: linear-gradient(180deg, #db8500 0%, #db8500 25%, #db8500 60%, #383838 100%);
        }

        .message .inner {
          color:white; font-size:16px;
        }

        .chat-message.entertown {
          text-align: center; color: #ffffff; text-shadow: 0 0 2px #f7f7f7; border-bottom: none; font-family:system-ui;
        }

        .low-health-layer {
          position: absolute; left: 0; top: 0; width: 0%; height: 0%; z-index: 10; pointer-events: none;
        }

        .bottom-panel .hp-indicator .blood-frame {
          bottom: 0px; width: 0px; height: 0px; position: static; background: url("https//imgur.com/a/xglxsCl") no-repeat; background-position-y: 0px; animation: blinker 0s linear once;
        }

        .bottom-panel .hp-indicator .hpp {
          width: 100%; line-height: 50px; font-size: 16px !important; color: rgb(233 209 233) !important; text-align: center; font-weight: bold; text-shadow: 0 0 7px rgb(0 0 0) !important; position: relative; top: 20px !important; left: 1px; font-family: system-ui !important;
        }

        .bottom-panel .hp-indicator .blood {
          background-blend-mode: color-burn; background-color: purple !important; background: url(../img/gui/krew-klatki.png?v=1676988042599) 0px -10px; filter: opacity(0.5);
        }

        .shop-wrapper .shop-content .shop-info-wrapper {
          line-height: 11px; position: absolute; top: 394px; font-size: 10px; left: 33px; width: 250px; color: white; text-align: center; text-shadow: 0 0 10px #070807;
        }

        .one-clan-quest.quest_active {
          border: 3px double #515151; box-shadow: 0 0px 4px 3px black;
        }

        .one-clan-quest {
          position: relative; border: 1px solid #ffc; border-radius: 5px; background-color: rgb(0 0 0 / 80%); padding: 6px; margin: 13px auto auto; color: white; text-shadow: 0 0 0px black;
        }

        .one-clan-quest .quest-state.quest_active {
          color: white; border: 3px double #515151; background-color: rgb(0 0 0 / 80%);
        }

        .one-clan-quest .quest-state.quest_unactive {
          color: red; border: 1px solid red; background-color: rgb(0 0 0 / 96%);
        }

        .button.purple,
        .widget-button.purple,
        .button.violet,
        .widget-button.violet {
            background-image: linear-gradient(to top, #120011, #1a0004) !important;
            box-shadow: inset 0 0 0px 1px #65005d, inset 0 0 0 1px #a40219;
        }

        .button.purple::before,
        .widget-button.purple::before,
        .button.violet::before,
        .widget-button.violet::before {
          content: ''; position: absolute; left: 3px; top: 3px; bottom: 3px; right: 3px; box-shadow: none; border-radius: 4px; transform: translateZ(0); backface-visibility: hidden;
        }

        .button.purple.active::before,
        .widget-button.purple.active::before,
        .button.violet.active::before,
        .widget-button.violet.active::before {
          box-shadow: inset 0 0 1px 1px #383838;
        }

        .button.purple.window-is-open::before,
        .widget-button.purple.window-is-open::before,
        .button.violet.window-is-open::before,
        .widget-button.violet.window-is-open::before {
          background-color: #1C1A1E;
        }

        .button.blink-violet,
        .widget-button.blink-violet {
            background-image: linear-gradient(to top, #120011, #1a0004) !important;
            box-shadow: inset 0 0 0px 1px #65005d, inset 0 0 0 1px #a40219;
        }

        .button.blink-violet::before,
        .widget-button.blink-violet::before {
          content: ''; position: absolute; left: 3px; top: 3px; bottom: 3px; right: 3px; box-shadow: none; border-radius: 4px; transform: translateZ(0); backface-visibility: hidden;
        }

        .button.blink-violet.active::before,
        .widget-button.blink-violet.active::before {
          box-shadow: inset 0 0 1px 1px #383838;
        }

        .button.purple.window-is-open::before,
        .widget-button.purple.window-is-open::before,
        .button.blink-violet.window-is-open::before,
        .widget-button.blink-violet.window-is-open::before {
          background-color: #1C1A1E;
        }

        .button.blue, .widget-button.blue {
            background-image: linear-gradient(to top, #120011, #1a0004) !important;
            box-shadow: inset 0 0 0px 1px #65005d, inset 0 0 0 1px #a40219;
        }

        .button.blue::before,
        .widget-button.blue::before {
          box-shadow: inset 0 0 6px 1px #000000, inset 0 0 0 1px #0c0d0d;
        }

        .button.blue.active::before,
        .widget-button.blue.active::before {
          box-shadow: none
        }

        .button.blue.window-is-open::before,
        .widget-button.blue.window-is-open::before {
          background-image: linear-gradient(to top, #121212, #1f1f1f)
        }

        .new-chat-window {
          background: url(https://i.imgur.com/lAljDHH.png);
        }

        .chat-channel-card-wrapper {
          height: 33px;
          border: 1px solid #65005d;
          background: #000000;
      }

        .chat-input-wrapper {
          background: #000000;
        }

        .new-chat-window .chat-message-wrapper {
          border: 1px solid #303030;
        }

        .chat-input-wrapper .magic-input-wrapper {
          border: 1px solid #65005d;
      }

      .chat-input-wrapper .control-wrapper .menu-card {
        border: 1px solid #65005d;
        font-size: 10px;
        font-family: 'Montserrat';
    }

    .new-chat-window .chat-message-wrapper {
      border: 1px solid #65005d;
  }

        .chat-configure-window .middle-graphic {
          position: absolute; top: -2px; left: -9px; right: -10px; bottom: -5px; border-style: solid; border-width: 0 11px; border-image: none; background-size: contain; background: black; border-color: black;
        }

        .addons-panel .main-header {
          background: url(https://i.ibb.co/Mp7J748/image.png); filter: brightness(0.5);
        }

        .addons-panel .left-column {
          position: absolute; top: -1px; left: -10px; right: 286px; bottom: -5px; filter: brightness(0.5);
        }

        .addons-panel .right-column {
          position: absolute; top: -2px; left: 245px; right: -5px; bottom: -5px; filter: brightness(0.5);
        }

        .widget-button .widget-blink {
          position: absolute; left: 999px; top: 4px;
        }

        .clan .left-column .scroll-wrapper.scrollable .scroll-pane {
          filter: drop-shadow(1px 1px 16px black);
        }

        \
 .layer.interface-layer .positioner.top .hud-container .hero-data .heroname {
          position: absolute; top: 2px; font-family: Arial; text-shadow: 0 0 15px white; left: 39px; color: white; width: 262px; height: 18px; padding: 0 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        .chests-window .chests-choice-wrapper {
          filter:grayscale(1);
        }

        .clan-members-content .scroll-wrapper .scroll-pane .clan-member {
          position: relative; color: white; text-shadow: 0 0 9px black;
        }

        .clan-member .char-info .last-visit {
          color: white; font-size: 9px;
        }

        .online-status green {
          color: lime; text-shadow: 0 0 9px black;
        }

        .stats-and-history .season-wnd .reward-header.active {
          filter: grayscale(1);
        }

        .stats-and-history .season-wnd .winners-header.active {
          filter: grayscale(1);
        }

        .trade-window .window-background {
          filter:grayscale(1);
        }

        .loader-image {
          filter:grayscale(1);
        }

        .mails-window .mail-column .middle-graphic {
          filter: grayscale(1);
        }

        .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .one-mail-head .from b {
          color: #000; text-shadow: 0 0 black;
        }

        .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .one-mail-head .special b {
          color: #0f7fd2; text-shadow: 0 0 0px black;
        }

        .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .msg-content color: #000; text-shadow: 0px 0px 0px black;
      }

      .mails-window .mail-column .middle-graphic {
        filter: grayscale(1);
      }

      .mails-window .content-header {
        filter: grayscale(1);
      }

      .mails-window .bottom-mail-panel .bottom-panel-graphics {
        filter: grayscale(1);
      }

      .tip-wrapper[data-item-type=heroic], .tip-wrapper[data-item-type=t-her] {
        box-shadow:0 0 0 0 #2b282a, 0 0 0 1px #0074ff, 0 0 0 2px #191311, 0 0 0 3px #2b272700, 0 0 0 4px #5a595900, 0 0 0 5px #00000000, 0 0 0 6px #5a585b00, 0 0 0 7px #2c262500, 0px 1px 20px 4px #0080ff !important
      }

      .tip-wrapper[data-item-type="t-leg"], .tip-wrapper[data-item-type="legendary"] {
        box-shadow:0 0 0 0 #2b282a, 0 0 0 1px #9d00ff, 0 0 0 2px #191311, 0 0 0 3px #2b272700, 0 0 0 4px #5a595900, 0 0 0 5px #00000000, 0 0 0 6px #5a585b00, 0 0 0 7px #2c262500, 0px 1px 20px 4px #9d00ff !important
      }

      .tip-wrapper[data-item-type="t-uniupg"], .tip-wrapper[data-item-type="uniupg"] {
        box-shadow:0 0 0 0 #2b282a, 0 0 0 1px #beb200, 0 0 0 2px #191311, 0 0 0 3px #2b272700, 0 0 0 4px #5a595900, 0 0 0 5px #00000000, 0 0 0 6px #5a585b00, 0 0 0 7px #2c262500, 0px 1px 20px 4px #beb200 !important
      }



      </style>`).appendTo('body');
  }
}

)();
