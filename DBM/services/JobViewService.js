/**
 * Created by rchouhan on 9/9/15.
 */

var getLog = function(rowId) {
    return $.ajax({
        type: 'GET',
        url: 'data/logData.json',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json'
    });
};

var deleteJobService = function(rowId) {
    return $.ajax({
        type: 'POST',
        url: '',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        traditional: true,
        data:rowId
    });
};

var saveJobs = function(jobs) {
    return $.ajax({
        type: 'POST',
        url: '',
        async: true,
        //jsonpCallback: 'jsonCallback',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        traditional: true,
        data:jobs
    });
};

var editJobViewSchedule = function(rowId) {
    return $.ajax({
        type: 'GET',
        //url: 'data/jobEditScheduleRecurringWeekly.json',
        url: 'data/jobEditScheduleRecurringDailyOccursEvery.json',
//        url: 'data/jobEditScheduleRecurringDailyOccursOnce.json',
//        url: 'data/jobEditScheduleRecurringMonthlyDateSpecific.json',
//        url: 'data/jobEditScheduleRecurringMonthlyDaySpecific.json',
//        url: 'data/jobEditScheduleOnce.json',
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data:rowId
    });
 };
