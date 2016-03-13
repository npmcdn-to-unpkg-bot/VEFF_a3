angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<link rel=\"shortcut icon\" type=\"image/png\" href=\"http://i.imgur.com/7KwFUnl.jpg?1\"/>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\r\n	<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\">\r\n\r\n</head>\r\n<body>\r\n	<main class=\"container-fluid\">\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n\r\n	<!-- error messages  -->\r\n	<toaster-container></toaster-container>\r\n\r\n	<div class=\"languageButtons\" ng-controller=\"LanguageController\">\r\n		<button ng-click=\"onChangeToIS()\">is</button>\r\n		<button ng-click=\"onChangeToEN()\">en</button>\r\n	</div>\r\n\r\n	<!-- inject:vendor:js -->\r\n	<script src=\"node_modules/postcss/lib/vendor.js\"></script>\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n	<script src=\"src/app.js\"></script>\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<script src=\"gulp/tasks/templates.js\"></script>\r\n	<!-- endinject -->\r\n\r\n</body>\r\n</html>\r\n");
$templateCache.put("components/loading-message/loading.html","<uib-alert type=\"info\">\r\n	<span translate=\"shared.LoadingMessage\">\r\n</uib-alert>\r\n");
$templateCache.put("components/product/product.html","<div>\r\n	<img ng-src=\"{{product.imagePath}}\" alt=\"{{\'shared.AltTag\' | translate}}\" width=\"200\" height=\"200\"/>\r\n	<div> \r\n			<label translate=\"product.Name\"></label>\r\n			<p>{{product.name}}</p>\r\n			<label translate=\"product.Price\"></label>\r\n			<p>{{product.price}} kr.</p>\r\n	</div>\r\n	<div ng-controller=\"SellerDetailsController\">\r\n		<button class=\"btn btn-default\" ng-click=\"onEditProduct(product)\" >\r\n			<i class=\"fa fa-plus\"/>\r\n			<span translate=\"shared.Edit\"></span>\r\n		</button>\r\n	</div>\r\n</div>");
$templateCache.put("components/product-dlg/product-dlg.html","<div class=\"addEditProduct\">\r\n	<label>\r\n		<b><span translate=\"productDlg.Title\"></span></b>\r\n	</label>\r\n	<div>\r\n		<input type=\"text\" ng-model=\"product.name\" placeholder=\"\" translate translate-attr-placeholder=\"productDlg.Name\"/>\r\n		<input type=\"text\" ng-model=\"product.price\" placeholder=\"\" translate translate-attr-placeholder=\"productDlg.Price\"/>\r\n		<input type=\"text\" ng-model=\"product.quantitySold\" placeholder=\"\" translate translate-attr-placeholder=\"productDlg.QuantitySold\"/>\r\n		<input type=\"text\" ng-model=\"product.quantityInStock\" placeholder=\"\" translate translate-attr-placeholder=\"productDlg.QuantityInStock\"/>\r\n		<input type=\"text\" ng-model=\"product.imagePath\" placeholder=\"\" translate translate-attr-placeholder=\"productDlg.ImagePath\"/>\r\n	</div>\r\n\r\n	<button class=\"btn btn-primary\" ng-click=\"onOk()\">\r\n		<span translate=\"shared.Add\"></span>\r\n	</button>\r\n	<button class=\"btn btn-primary\" ng-click=\"onCancel()\">\r\n		<span translate=\"shared.Cancel\"></span>\r\n	</button>\r\n</div>");
$templateCache.put("components/seller-details/seller-details.html","<div ng-show=\"isLoading\">\r\n	<loading-message></loading-message>\r\n</div>\r\n\r\n<div ng-hide=\"isLoading\">\r\n	<div >\r\n		<button class=\"btn btn-primary\" ng-click=\"onAddProduct()\">\r\n			<i class=\"fa fa-plus\"/>\r\n			<span translate=\"shared.Add\"></span>\r\n		</button>\r\n	</div>\r\n\r\n	<div>\r\n		<a href=\"#/\"><span translate=\"shared.Back\"></span></a>\r\n	</div>\r\n	<img src=\"{{seller.imagePath}}\" alt=\"{{\'shared.AltTag\' | translate}}\" height=\"200\" width=\"200\">\r\n	<h2>{{seller.name}}</h2>\r\n	<p>{{seller.category}}</p>\r\n</div>\r\n\r\n<div ng-show=\"allTab\">\r\n	<ul class=\"nav nav-tabs\">\r\n	  <li class=\"active\"><a translate=\"shared.allProducts\"></a></li>\r\n	  <li ng-click=\"allTab = false\" ng-init=\"allTab=true\"><a translate=\"shared.topTen\"></a></li>\r\n	</ul>\r\n\r\n	<product-card ng-repeat=\"p in products\" ng-model=\"p\">\r\n	</product-card>\r\n\r\n	<div ng-hide=\"hasProducts\" class=\"alert alert-info\" role=\"alert\" translate=\"shared.noProducts\"></div>\r\n</div>\r\n\r\n<div ng-hide=\"allTab\">\r\n	<ul class=\"nav nav-tabs\">\r\n	  <li ng-click=\"allTab = true\"><a translate=\"shared.allProducts\"></a></li>\r\n	  <li class=\"active\"><a translate=\"shared.topTen\"></a></li>\r\n	</ul>\r\n\r\n	<product-card ng-repeat=\"p in topTen\" ng-model=\"p\">\r\n	</product-card>\r\n\r\n	<div ng-hide=\"hasProducts\" class=\"alert alert-info\" role=\"alert\" translate=\"shared.noProducts\"></div>\r\n</div>");
$templateCache.put("components/seller-dlg/seller-dlg.html","<div class=\"addEditSeller\">\r\n	<label>\r\n		<b><span translate=\"sellerDlg.Title\"></span></b>\r\n	</label>\r\n	<form name=\"addEditSellerFrom\">\r\n		<input type=\"text\" ng-model=\"seller.name\" placeholder=\"\" translate translate-attr-placeholder=\"sellerDlg.Name\"/>\r\n		<input type=\"text\" ng-model=\"seller.category\" placeholder=\"\" translate translate-attr-placeholder=\"sellerDlg.Category\"/>\r\n		<input type=\"text\" ng-model=\"seller.imagePath\" placeholder=\"\" translate translate-attr-placeholder=\"sellerDlg.ImagePath\"/>\r\n	</Form>\r\n\r\n	<button class=\"btn btn-primary\" ng-click=\"onOk()\">\r\n		<span translate=\"shared.Add\"></span>\r\n	</button>\r\n	<button class=\"btn btn-primary\" ng-click=\"onCancel()\">\r\n		<span translate=\"shared.Cancel\"></span>\r\n	</button>\r\n</div>");
$templateCache.put("components/sellers/index.html","<!--\r\n<div> Hér ætti að birtast listi af seljendum - TODO: útfæra það!</div>\r\n-->\r\n<div ng-show=\"isLoading\">\r\n	<loading-message></loading-message>\r\n</div>\r\n\r\n<div class=\"content\" ng-hide=\"isLoading\">\r\n	<div>\r\n		<button class=\"btn btn-primary\" ng-click=\"onAddSeller()\">\r\n			<i class=\"fa fa-plus\"/>\r\n			<span translate=\"sellers.AddSeller\"></span>\r\n		</button>\r\n	</div>\r\n\r\n	<div class=\"table-responsive\">\r\n		<table class=\"table table-hover\">\r\n			<thead>\r\n				<tr table-sort=\"name\">\r\n					<th></th>			\r\n					<th data-columnName=\"name\">\r\n						<i class=\"fa fa-plus\"/>\r\n						<span translate=\"sellers.Name\"></span>\r\n					</th>\r\n					<th data-columnName=\"category\" translate=\"sellers.Category\"></th>\r\n					<th></th>\r\n				</tr>\r\n			</thead> \r\n			<tbody>\r\n				<tr ng-repeat=\"s in sellers | orderBy:predicate:reverse\">\r\n					<td>\r\n						<img ng-src=\"{{s.imagePath}}\" alt=\"{{\'shared.AltTag\' | translate}}\" height=\"50\" width=\"50\">\r\n					</td>\r\n					<td>\r\n						<a ng-href=\"#/sellers/{{s.id}}\">{{s.name}}</a>\r\n					</td>\r\n					<td>{{s.category}}</td>\r\n					<td>\r\n						<div ng-show=\"!isSellerDlgOpen\">\r\n							<button class=\"btn btn-default\" ng-click=\"onEditSeller(s)\">\r\n								<i class=\"fa fa-plus\"/>\r\n								<span translate=\"sellers.Edit\"></span>\r\n							</button>\r\n						</div>\r\n					</td>\r\n				</tr>\r\n			</tbody>\r\n		</table>\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);