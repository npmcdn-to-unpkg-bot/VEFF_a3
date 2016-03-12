"use strict";

angular.module("project3App").directive('productCard', function productCard(){
	return {
		restrict: "E",
		templateUrl: "src/components/product-directive/Product.html",
		scope: {
			product: "=ngModel"
		}
	};
});