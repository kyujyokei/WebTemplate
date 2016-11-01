"use strict";try{angular.module("cartAppTranslations")}catch(a){angular.module("cartAppTranslations",["pascalprecht.translate"])}angular.module("cartAppTranslations").config(["$translateProvider",function(a){var b={MY_CART_TITLE:"My Cart",ITEM_COUNT_TITLE:"({{ itemCount }})",CONTINUE_SHOPPING_BUTTON:"Continue Shopping",PROMO_CODE_BUTTON:"Apply Coupon",APPLY_BUTTON:"APPLY",CHECKOUT_BUTTON:"CHECKOUT",OR_CHECKOUT_WITH_TITLE:"Or checkout with",CHECKOUT_WITH_TITLE:"Checkout with",CHECKOUT_WITH_METHOD_TITLE:"Checkout with {{methodName}}",CART_TABLE_PRODUCT_TITLE:"PRODUCT",CART_TABLE_ITEM_TITLE:"ITEM",CART_TABLE_QUANTITY_TITLE:"QUANTITY",CART_TABLE_TOTAL_TITLE:"TOTAL",TOTAL_COST_TITLE:"Total Cost",SUBTOTAL_TITLE:"Subtotal",SHIPPING_AND_TAX_CALCULATED:"Discounts, shipping and tax will be calculated in checkout.",SHIPPING_TITLE:"Shipping",TAX_TITLE:"Tax",SKU_TITLE:"SKU: {{ sku }}",PRICE_TITLE:"Price: ",CUSTOM_TITLE:"Custom",OUT_OF_STOCK_TITLE:"Out of Stock",PRODUCT_OUT_OF_STOCK_TITLE:"Product out of stock",PROMOTION_NAME_TITLE:"Coupon: {{ couponName }}",SECURE_CHECKOUT_TITLE:"Secure Checkout",CREDIT_CARDS_TITLE:"Credit Cards",CHECKOUT_WITH_PAYPAL_TITLE:" Checkout with PayPal",REMOVE_PRODUCT_BUTTON_TITLE:"Remove Item",REMOVE_COUPON_BUTTON_TITLE:"Remove coupon",UPDATE_QUANTITY_SELECT_TITLE:"Update quantity",CART_IS_EMPTY_MESSAGE:"Your cart is empty.",coupon:{ERROR:{ERROR_INVALID_PRODUCT_QUANTITY:"This coupon is only valid for more than {{ x }} specific products.",ERROR_INVALID_SUBTOTAL:"This coupon is only valid for orders above {{ subtotal }}.",ERROR_INVALID_PRODUCTS:"This coupon is only valid for specific products.",ERROR_INVALID_COMMAND_FIELD:"Your code can't have more than 20 characters.",ERROR_COUPON_IS_DISABLED:"This coupon is not available at the moment.",ERROR_COUPON_USAGE_EXCEEDED:"Hmm...looks like this coupon has exceeded its usage limit. Check back for more discounts.",ERROR_COUPON_HAS_EXPIRED:"Awww! It looks like this promotion has already ended.",ERROR_COUPON_IS_NOT_ACTIVE_YET:"This promotion hasn’t started yet...check back again on {{ startDate }}.",ERROR_COUPON_DOES_NOT_EXIST:"Hmm...looks like this coupon is invalid."},PLEASE_ADD_PRODUCTS_MESSAGE:"Add products to the cart to activate the coupon.",INVALID_COUPON_MESSAGE:"Invalid coupon",REMOVED_COUPON_MESSAGE:"Successfully removed coupon",APPLIED_COUPON_MESSAGE:"Success! The coupon {{name}} was applied to your order.",PLACEHOLDER:"Enter code",DISCOUNT:"discount",FREE_SHIPPING:"(free shipping)"},CART_WIDGET_CART_TITLE:"Cart",CART_WIDGET_CLOSE_BUTTON_TITLE:"Close cart widget",CART_WIDGET_VIEW_CART_BUTTON:"VIEW CART",CART_WIDGET_EMPTY_CART_MESSAGE:"Your cart's empty.",CART_WIDGET_QUANTITY_TITLE:"QTY: ",CART_WIDGET_FIRST_ITEM_MESSAGE:"You added your first item! Nice.",NO_PREMIUM_HEADER_MAIN:"Don't miss out on sales",NO_PREMIUM_HEADER_MAIN_2:"Open your store for business",NO_PREMIUM_TEXT:"The checkout process is a premium feature. Customers won’t be able to buy from you until you upgrade to an eCommerce plan.",NO_PREMIUM_TEXT_2:"Accepting online orders from your customers is a premium feature. Upgrade to an eCommerce plan to open your store for business.",UPGRADE_NOW_BUTTON:"Upgrade now",UPGRADE_NOW_BUTTON_2:"Upgrade",NO_PREMIUM_BUYER_HEADER:"Temporarily Unavailable",NO_PREMIUM_BUYER_TEXT1:"Hmm...this action is unavailable at the moment.",NO_PREMIUM_BUYER_TEXT2:"Try again soon.",NO_PREMIUM_BUYER_TEXT_2:"We are unable to accept online payments. Please contact us to complete your purchase",NO_PREMIUM_BUYER_OK_BUTTON:"OK",SITE_NOT_SAVED_TEXT1:"Looks like your site hasn't been saved yet.",SITE_NOT_SAVED_TEXT2:"To continue, save your site.",NOT_LIVE_TEXT:"Available only on the live site.",NOT_LIVE_OK_BUTTON:"OK",SET_PAY_METHOD_HEADER:"You're almost there",SET_PAY_METHOD_HEADER_2:"Set up payments",SET_PAY_METHOD_TEXT1:"To complete the checkout process,",SET_PAY_METHOD_TEXT2:"set a payment method in the Store Manager.",SET_PAY_METHOD_TEXT_2:"You haven't set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.",SET_PAY_METHOD_BUTTON:"Set payment method",SET_PAY_METHOD_BUTTON_2:"Set up payments",CONTINUE_TO_CHECKOUT:"No thanks, continue to checkout anyway",CONTINUE_TO_CHECKOUT_2:"I just want to preview my store's checkout process",IN_EDITOR_NOTIFICATION_OPENING:"Please note:",IN_EDITOR_NOTIFICATION:"To see what the checkout process looks like, go to your published site.",TIME_TO_SAVE:"It’s time to save your site",TIME_TO_SAVE_MESSAGE1:"To continue to checkout, you need to save your site.",TIME_TO_SAVE_MESSAGE2:"To do so, click “Save” in the top right menu.",SET_PAY_METHOD_HEADER_NOT_PROVISIONED:"To checkout, set a payment method",SET_PAY_METHOD_TEXT_NOT_PROVISIONED:"Click the Wix Stores menu and select “Manage Store” to set a payment method.",NOTE_ADD_CONTENT_TITLE:"Add note to seller",NOTE_EDIT_CANCEL_BUTTON:"CANCEL",NOTE_EDIT_DONE_BUTTON:"DONE",NOTE_VIEW_EDIT_BUTTON:"Edit note",NOTE_VIEW_DELETE_BUTTON:"Delete note",NOTE_PLACEHOLDER:"Instructions? Special requests? Add them here.",NOTE_TO_SELLER_PREFIX:"Note to seller:",CART_ICON_3:"CART",CART_ICON_4:"Cart",CART_ICON_5:"Cart",CART_ICON_7:"Cart",NO_SHIPPING_TEXT:"Unable to ship to your destination.\nPlease contact the store for more information.",NO_SHIPPING_OK_BUTTON:"OK",SET_SHIPPING_METHOD_HEADER:"Set Up Shipping Methods",SET_SHIPPING_METHOD_HEADER_NOT_PROVISIONED:"To checkout, set a shipping method",SET_SHIPPING_METHOD_TEXT:"You haven't set up any shipping methods. Choose some destinations to ship to your buyers.",SET_SHIPPING_METHOD_BUTTON:"Take Me There",SET_SHIPPING_METHOD_TEXT_NOT_PROVISIONED:"Click the Wix Stores menu and select “Manage Store” to set a shipping method.",PROBLEM_WITH_PAYMENT_TITLE:"There's a Problem with Your Payment",PAYMENT_ERROR_MESSAGE:"{{paymentMethodName}} contacted us to say that your payment didn't go through. Please follow up with {{paymentMethodName}} to try and resolve the issue.",PAYMENT_ERROR_SUPPORT_BUTTON:"Contact {{paymentMethodName}}"};a.translations("en",b),a.translations(b),a.preferredLanguage&&a.preferredLanguage("en")}]).value("preferredLanguage","en");
//# sourceMappingURL=messages_en.js.map