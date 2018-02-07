"use strict";
exports.__esModule = true;
var _ = require("./plugins/underscore-min");
var MainController = /** @class */ (function () {
    function MainController(typeOfLottery) {
        if (typeOfLottery === void 0) { typeOfLottery = 'mega'; }
        this.range = new Array();
        this.type = 'mega';
        this.result = '';
        this.range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];
        this.type = typeOfLottery;
    }
    ;
    MainController.prototype.CombinedZeroIntoNumber = function (num) {
        if (num < 10)
            return '0' + num;
        return num;
    };
    ;
    MainController.prototype.PicksTicket = function () {
        var lst = new Array();
        if (this.type == 'mega') {
            lst = _.sample(_.without(this.range, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55), 6); //remove this range from 46 to 55
        }
        else if (this.type == 'power') {
            lst = _.sample(this.range, 6);
        }
        var main = this;
        _.each(_.sortBy(lst), function (num) {
            main.result += main.CombinedZeroIntoNumber(num) + '-';
        });
        return main.result.substring(0, main.result.length - 1);
    };
    return MainController;
}());
exports.MainController = MainController;

