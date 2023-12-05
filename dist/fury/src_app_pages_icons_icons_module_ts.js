"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_icons_icons_module_ts"],{

/***/ 65678:
/*!*****************************************************!*\
  !*** ./src/app/pages/icons/icons-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsRoutingModule: () => (/* binding */ IconsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.component */ 61590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _icons_component__WEBPACK_IMPORTED_MODULE_0__.IconsComponent
}];
class IconsRoutingModule {
  static #_ = this.ɵfac = function IconsRoutingModule_Factory(t) {
    return new (t || IconsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: IconsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 61590:
/*!************************************************!*\
  !*** ./src/app/pages/icons/icons.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsComponent: () => (/* binding */ IconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 75043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/shared/scrollbar/scrollbar.component */ 86056);














function IconsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](icon_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](icon_r1);
  }
}
class IconsComponent {
  constructor() {
    this.icons = ['3d_rotation', 'access_alarm', 'access_alarms', 'access_time', 'accessibility', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'adb', 'add', 'add_alarm', 'add_alert', 'add_box', 'add_circle', 'add_circle_outline', 'add_shopping_cart', 'add_to_photos', 'adjust', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'airplanemode_active', 'airplanemode_inactive', 'airplay', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'album', 'android', 'announcement', 'apps', 'archive', 'arrow_back', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'assistant', 'assistant_photo', 'attach_file', 'attach_money', 'attachment', 'audiotrack', 'autorenew', 'av_timer', 'backspace', 'backup', 'battery_alert', 'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'beenhere', 'block', 'bluetooth', 'bluetooth_audio', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'book', 'bookmark', 'bookmark_border', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'broken_image', 'brush', 'bug_report', 'build', 'business', 'cached', 'cake', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_received', 'call_split', 'camera', 'camera_alt', 'camera_enhance', 'camera_front', 'camera_rear', 'camera_roll', 'cancel', 'card_giftcard', 'card_membership', 'card_travel', 'cast', 'cast_connected', 'center_focus_strong', 'center_focus_weak', 'change_history', 'chat', 'chat_bubble', 'chat_bubble_outline', 'check', 'check_box', 'check_box_outline_blank', 'check_circle', 'chevron_left', 'chevron_right', 'chrome_reader_mode', 'class', 'clear', 'clear_all', 'close', 'closed_caption', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'code', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'comment', 'compare', 'computer', 'confirmation_number', 'contact_phone', 'contacts', 'content_copy', 'content_cut', 'content_paste', 'control_point', 'control_point_duplicate', 'create', 'credit_card', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_square', 'dashboard', 'data_usage', 'dehaze', 'delete', 'description', 'desktop_mac', 'desktop_windows', 'details', 'developer_board', 'developer_mode', 'device_hub', 'devices', 'dialer_sip', 'dialpad', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'disc_full', 'dns', 'do_not_disturb', 'do_not_disturb_alt', 'dock', 'domain', 'done', 'done_all', 'drafts', 'drive_eta', 'dvr', 'edit', 'eject', 'email', 'equalizer', 'error', 'error_outline', 'event', 'event_available', 'event_busy', 'event_note', 'event_seat', 'exit_to_app', 'expand_less', 'expand_more', 'explicit', 'explore', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'extension', 'face', 'fast_forward', 'fast_rewind', 'favorite', 'favorite_border', 'feedback', 'file_download', 'file_upload', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_list', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'find_in_page', 'find_replace', 'flag', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flight', 'flight_land', 'flight_takeoff', 'flip', 'flip_to_back', 'flip_to_front', 'folder', 'folder_open', 'folder_shared', 'folder_special', 'font_download', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint', 'format_quote', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'forum', 'forward', 'forward_10', 'forward_30', 'forward_5', 'fullscreen', 'fullscreen_exit', 'functions', 'gamepad', 'games', 'gesture', 'get_app', 'gif', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'grade', 'gradient', 'grain', 'graphic_eq', 'grid_off', 'grid_on', 'group', 'group_add', 'group_work', 'hd', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'headset', 'headset_mic', 'healing', 'hearing', 'help', 'help_outline', 'high_quality', 'highlight_off', 'history', 'home', 'hotel', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'image', 'image_aspect_ratio', 'import_export', 'inbox', 'indeterminate_check_box', 'info', 'info_outline', 'input', 'insert_chart', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'invert_colors', 'invert_colors_off', 'iso', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'label', 'label_outline', 'landscape', 'language', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'launch', 'layers', 'layers_clear', 'leak_add', 'leak_remove', 'lens', 'library_add', 'library_books', 'library_music', 'link', 'list', 'live_help', 'live_tv', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'location_city', 'location_disabled', 'location_off', 'location_on', 'location_searching', 'lock', 'lock_open', 'lock_outline', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loop', 'loupe', 'loyalty', 'mail', 'map', 'markunread', 'markunread_mailbox', 'memory', 'menu', 'merge_type', 'message', 'mic', 'mic_none', 'mic_off', 'mms', 'mode_comment', 'mode_edit', 'money_off', 'monochrome_photos', 'mood', 'mood_bad', 'more', 'more_horiz', 'more_vert', 'mouse', 'movie', 'movie_creation', 'music_note', 'my_location', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'navigation', 'network_cell', 'network_locked', 'network_wifi', 'new_releases', 'nfc', 'no_sim', 'not_interested', 'note_add', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'offline_pin', 'ondemand_video', 'open_in_browser', 'open_in_new', 'open_with', 'pages', 'pageview', 'palette', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'party_mode', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'payment', 'people', 'people_outline', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'person', 'person_add', 'person_outline', 'person_pin', 'personal_video', 'phone', 'phone_android', 'phone_bluetooth_speaker', 'phone_forwarded', 'phone_in_talk', 'phone_iphone', 'phone_locked', 'phone_missed', 'phone_paused', 'phonelink', 'phonelink_erase', 'phonelink_lock', 'phonelink_off', 'phonelink_ring', 'phonelink_setup', 'photo', 'photo_album', 'photo_camera', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'picture_in_picture', 'pin_drop', 'place', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'play_for_work', 'playlist_add', 'plus_one', 'poll', 'polymer', 'portable_wifi_off', 'portrait', 'power', 'power_input', 'power_settings_new', 'present_to_all', 'print', 'public', 'publish', 'query_builder', 'question_answer', 'queue', 'queue_music', 'radio', 'radio_button_checked', 'radio_button_unchecked', 'rate_review', 'receipt', 'recent_actors', 'redeem', 'redo', 'refresh', 'remove', 'remove_circle', 'remove_circle_outline', 'remove_red_eye', 'reorder', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'reply', 'reply_all', 'report', 'report_problem', 'restaurant_menu', 'restore', 'ring_volume', 'room', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'router', 'satellite', 'save', 'scanner', 'schedule', 'school', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'sd_card', 'sd_storage', 'search', 'security', 'select_all', 'send', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_system_daydream', 'settings_voice', 'share', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'shuffle', 'signal_cellular_4_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'sim_card', 'sim_card_alert', 'skip_next', 'skip_previous', 'slideshow', 'smartphone', 'sms', 'sms_failed', 'snooze', 'sort', 'sort_by_alpha', 'space_bar', 'speaker', 'speaker_group', 'speaker_notes', 'speaker_phone', 'spellcheck', 'star', 'star_border', 'star_half', 'stars', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop', 'storage', 'store', 'store_mall_directory', 'straighten', 'strikethrough_s', 'style', 'subject', 'subtitles', 'supervisor_account', 'surround_sound', 'swap_calls', 'swap_horiz', 'swap_vert', 'swap_vertical_circle', 'switch_camera', 'switch_video', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'system_update_alt', 'tab', 'tab_unselected', 'tablet', 'tablet_android', 'tablet_mac', 'tag_faces', 'tap_and_play', 'terrain', 'text_format', 'textsms', 'texture', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'time_to_leave', 'timelapse', 'timer', 'timer_10', 'timer_3', 'timer_off', 'toc', 'today', 'toll', 'tonality', 'toys', 'track_changes', 'traffic', 'transform', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'tune', 'turned_in', 'turned_in_not', 'tv', 'undo', 'unfold_less', 'unfold_more', 'usb', 'verified_user', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'vibration', 'video_library', 'videocam', 'videocam_off', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_comfy', 'view_compact', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'vignette', 'visibility', 'visibility_off', 'voice_chat', 'voicemail', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'vpn_key', 'vpn_lock', 'wallpaper', 'warning', 'watch', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny', 'wc', 'web', 'whatshot', 'widgets', 'wifi', 'wifi_lock', 'wifi_tethering', 'work', 'wrap_text', 'youtube_searched_for', 'zoom_in', 'zoom_out'];
    this.iconCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl();
    this.filteredIcons$ = this.iconCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(search => this.icons.filter(icon => icon.indexOf(search ? search.toLowerCase() : '') !== -1)));
  }
  static #_ = this.ɵfac = function IconsComponent_Factory(t) {
    return new (t || IconsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: IconsComponent,
    selectors: [["fury-icons"]],
    decls: 22,
    vars: 7,
    consts: [["fxLayout", "column", 1, "padding"], ["current", "Material Icons"], ["fxLayout", "column", "fxLayout.gt-md", "row", "fxLayoutGap", "24px"], ["fxFlex", "auto", "fxFlex.gt-md", "250px"], ["fxFlex", "auto"], ["fxLayout", "column"], ["floatLabel", "never", "fxFlex", "noshrink"], ["matInput", "", 3, "formControl"], ["fxFlex", "grow", 1, "icon-list"], ["class", "icon", 4, "ngFor", "ngForOf"], [1, "icon"], [1, "icon-name"]],
    template: function IconsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Icons are a neat way to add some image to text-only lists. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br")(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Fury comes with a great variety of icons from the official Material Icons font and using them can't be simpler. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "fury-card", 4)(9, "fury-card-header")(10, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Icon Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "fury-card-header-subheading");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Hundreds of icons ready to be used.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "fury-card-content", 5)(15, "mat-form-field", 6)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Search\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "fury-scrollbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, IconsComponent_div_20_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.iconCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 5, ctx.filteredIcons$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsComponent, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__.FuryCardHeaderSubTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__.FuryCardContent, _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_4__.ScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.icon-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  transition: background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  border-radius: 8px;\n}\n@media screen and (max-width: 599px) {\n  .icon-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (min-width: 599px) and (max-width: 959px) {\n  .icon-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 33%;\n  }\n}\n.icon-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 42px;\n  height: 42px;\n  width: 42px;\n  margin: 24px 16px 8px;\n}\n.icon-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .icon-name[_ngcontent-%COMP%] {\n  display: block;\n  padding-bottom: 12px;\n  font: var(--font-caption);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9pY29ucy9pY29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUNyR0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1FQUFBO0VBQ0Esa0JER1k7QUNXaEI7QURzRUU7RUN6RkE7SUFRSSxVQUFBO0VBZUo7QUFDRjtBRHdFRTtFQ2hHQTtJQVlJLFVBQUE7RUFnQko7QUFDRjtBQWRJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFnQk47QUFiSTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUVBLHlCQUFBO0FBY04iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAdXNlICdzYXNzOm1hdGgnO1xuQGltcG9ydCBcInZhclwiO1xuXG4uaWNvbi1saXN0IHtcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb247XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG5cbiAgICBAaW5jbHVkZSBtZWRpYS14cyB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLXNtIHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgfVxuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgbWFyZ2luOiAkc3BhY2luZyBtYXRoLmRpdigkc3BhY2luZywgMS41KSBtYXRoLmRpdigkc3BhY2luZywgMyk7XG4gICAgfVxuXG4gICAgLmljb24tbmFtZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiBtYXRoLmRpdigkc3BhY2luZywgMik7XG5cbiAgICAgIGZvbnQ6IHZhcigtLWZvbnQtY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRightAnimation, _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInUpAnimation]
    }
  });
}


/***/ }),

/***/ 86183:
/*!*********************************************!*\
  !*** ./src/app/pages/icons/icons.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsModule: () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.module */ 98996);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons-routing.module */ 65678);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.component */ 61590);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@fury/shared/scrollbar/scrollbar.module */ 31907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









class IconsModule {
  static #_ = this.ɵfac = function IconsModule_Factory(t) {
    return new (t || IconsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: IconsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__.IconsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_1__.FuryCardModule, _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__.ScrollbarModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](IconsModule, {
    declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_4__.IconsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__.IconsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_1__.FuryCardModule, _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__.ScrollbarModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_icons_icons_module_ts.js.map