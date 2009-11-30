???/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Stoyan Kyosev (http://svest.org). */
jQuery(function($){
    $.datepicker.regional['bg'] = {clearText: '??????????????', clearStatus: '?????????????? ???????????????????? ????????',
        closeText: '??????????????', closeStatus: '?????????????? ?????? ??????????????',
        prevText: '&#x3c;??????????', prevStatus: '???????????? ?????????????????? ??????????',
        nextText: '????????????&#x3e;', nextStatus: '???????????? ?????????????????? ??????????',
        currentText: '????????', currentStatus: '',
        monthNames: ['????????????','????????????????','????????','??????????','??????','??????',
        '??????','????????????','??????????????????','????????????????','??????????????','????????????????'],
        monthNamesShort: ['??????','??????','??????','??????','??????','??????',
        '??????','??????','??????','??????','??????','??????'],
        monthStatus: '???????????? ???????? ??????????', yearStatus: '???????????? ?????????? ????????????',
        weekHeader: 'Wk', weekStatus: '?????????????? ???? ????????????',
        dayNames: ['????????????','????????????????????','??????????????','??????????','??????????????????','??????????','????????????'],
        dayNamesShort: ['??????','??????','??????','??????','??????','??????','??????'],
        dayNamesMin: ['????','????','????','????','????','????','????'],
        dayStatus: '?????????? DD ???????? ?????????? ?????? ???? ??????????????????', dateStatus: '???????????? D, M d',
        dateFormat: 'dd.mm.yy', firstDay: 1,
        initStatus: '???????????? ????????', isRTL: false};
    $.datepicker.setDefaults($.datepicker.regional['bg']);
});
