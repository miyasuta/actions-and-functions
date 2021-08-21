using my.bookshop as my from '../db/data-model';
        
service CatalogService {
    type Result: {
        message: String;
        id: Integer;
        param1: String;
        param2: String;
    };

    @readonly entity Books as projection on my.Books
        actions {
            action boundActionWithParam(param1:String, param2:String) returns Result;
            action boundActionWithoutParam() returns Result;
            function boundFunctionWithParam(param1:String, param2:String) returns Result;
            function boundFunctionWithoutParam() returns Result;
        };

        action unboundActionWithParam(param1:String, param2:String) returns Result;
        action unboundActionWithoutParam() returns Result;
        function unboundFunctionWithParam(param1:String, param2:String) returns Result;
        function unboundFunctionWithoutParam() returns Result;
}