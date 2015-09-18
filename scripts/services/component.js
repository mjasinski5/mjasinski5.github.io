'use strict';

/**
 * @ngdoc service
 * @name hackatonWebangularApp.Component
 * @description
 * # Component
 * Service in the hackatonWebangularApp.
 */
angular.module('hackatonWebangularApp')
  .factory('Component', function (RestAngularService, LsCacheFactory) {

    var componentFactory = {};

    var restFactoryAll = RestAngularService.ComponentAll();
    var restFactoryPrivate = RestAngularService.ComponentPrivate();


    var _getCurrentComponentsRest = function(){
      return LsCacheFactory.GetToken() ? restFactoryPrivate.one('/intcomponent').getList() : restFactoryAll.one('/component').getList();
    };


    var _getCurrentComponents = function(){

      var response = {
  "components": [
    {
      "status": "up",
      "name": "Avalara Tax",
      "position": 1,
      "description": null,
      "id": "my6ptyy0bj3j",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "down",
      "name": "Builder",
      "position": 1,
      "description": "https://builder.yaas.io",
      "id": "mbsjjxw33ksx",
      "group_id": "fx94tgnml2mn"
    },
    {
      "status": "up",
      "name": "YaaS Home",
      "position": 1,
      "description": "https://yaas.io/home/",
      "id": "7nz860vmkzfq",
      "group_id": "wgy9lnp4klv3"
    },
    {
      "status": "up",
      "name": "Web Sites",
      "position": 1,
      "description": null,
      "id": "wgy9lnp4klv3",
      "group_id": null
    },
    {
      "status": "up",
      "name": "Commerce Module",
      "position": 2,
      "description": null,
      "id": "55qd4r11qk7g",
      "group_id": "fx94tgnml2mn"
    },
    {
      "status": "down",
      "name": "Services",
      "position": 2,
      "description": null,
      "id": "7fbp8tfrjmd8",
      "group_id": null
    },
    {
      "status": "up",
      "name": "Cart",
      "position": 2,
      "description": null,
      "id": "3pfhh0hk46m1",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Builder",
      "position": 3,
      "description": null,
      "id": "fx94tgnml2mn",
      "group_id": null
    },
    {
      "status": "up",
      "name": "Algolia Module",
      "position": 3,
      "description": null,
      "id": "pxgx3l5b7zx5",
      "group_id": "fx94tgnml2mn"
    },
    {
      "status": "down",
      "name": "Dev Portal",
      "position": 3,
      "description": "https://devportal.yaas.io",
      "id": "pck5cpwsj14j",
      "group_id": "wgy9lnp4klv3"
    },
    {
      "status": "up",
      "name": "Cart Calculation",
      "position": 3,
      "description": null,
      "id": "jm65h7d7nv77",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "YaaS Market",
      "position": 4,
      "description": "https://market.yaas.io",
      "id": "hy49pmzwwlnc",
      "group_id": "wgy9lnp4klv3"
    },
    {
      "status": "up",
      "name": "Email Templates Module",
      "position": 4,
      "description": null,
      "id": "zlr5w4sjh6y8",
      "group_id": "fx94tgnml2mn"
    },
    {
      "status": "up",
      "name": "Category",
      "position": 4,
      "description": null,
      "id": "26yd7d345kj5",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Checkout",
      "position": 5,
      "description": null,
      "id": "wbjkx9c8cff4",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Storefront",
      "position": 5,
      "description": "https://shops.yaas.io",
      "id": "2rzjhtgtf1bv",
      "group_id": "wgy9lnp4klv3"
    },
    {
      "status": "up",
      "name": "RAML Patterns",
      "position": 6,
      "description": "https://api.yaas.io/patterns/",
      "id": "0m152lc2xmzt",
      "group_id": "wgy9lnp4klv3"
    },
    {
      "status": "up",
      "name": "Configuration",
      "position": 6,
      "description": null,
      "id": "qlpprwn065d8",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Techne",
      "position": 7,
      "description": null,
      "id": "w5rwm89njqtr",
      "group_id": "wgy9lnp4klv3"
    },
    {
      "status": "up",
      "name": "Coupon",
      "position": 7,
      "description": null,
      "id": "g09kz361hppx",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Customer",
      "position": 8,
      "description": null,
      "id": "xgrld6s8t540",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Co-Innovation Network",
      "position": 8,
      "description": "https://community.yaas.io",
      "id": "7mz9djjcsxg7",
      "group_id": "wgy9lnp4klv3"
    },
    {
      "status": "up",
      "name": "Document",
      "position": 9,
      "description": null,
      "id": "5v058mc9zyrm",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Email",
      "position": 10,
      "description": null,
      "id": "t59f9fm2v9bn",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Tax",
      "position": 11,
      "description": null,
      "id": "yf3g6qh64jvn",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Media",
      "position": 12,
      "description": null,
      "page_id": "2jzl9rbhcvzm",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "OAuth2",
      "position": 13,
      "description": null,
      "id": "139hdym7k7cy",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Order",
      "position": 14,
      "description": null,
      "id": "f3c3k0b0wwxl",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "PCM",
      "position": 15,
      "description": null,
      "id": "gbvpm1166jqt",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Price",
      "position": 16,
      "description": null,
      "id": "95w5d9s9mpfr",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Product",
      "position": 17,
      "description": null,
      "id": "4s575ld7d51s",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Product Details",
      "position": 18,
      "description": null,
      "id": "ycfl24t8258r",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "PubSub",
      "position": 19,
      "description": null,
      "id": "sljn38ts8bsy",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Schema",
      "position": 20,
      "description": null,
      "id": "qyd69zhhd24j",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Search",
      "position": 21,
      "description": null,
      "id": "g0v8vn3c4yry",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Shipping Cost",
      "position": 22,
      "description": null,
      "id": "7np72r0k91hg",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Site",
      "position": 23,
      "description": null,
      "id": "nn0pwy76hydl",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Stripe Payment",
      "position": 24,
      "description": null,
      "id": "0y8znf4s7vlv",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Algolia Search",
      "position": 25,
      "description": null,
      "id": "1mhvbt3p3tcb",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "Kupa",
      "position": 1,
      "description": null,
      "id": "001",
      "group_id": "7fbp8tfrjmd8"
    },
    {
      "status": "up",
      "name": "dupa",
      "position": 1,
      "description": null,
      "id": "00d1",
      "group_id": "7fbp8tfrjmd8"
    }
  ]
}

        return response.components;

    }


    componentFactory.GetCurrentComponents = _getCurrentComponents;
    componentFactory.GetCurrentComponentsRest = _getCurrentComponentsRest;

    return componentFactory;

  });
