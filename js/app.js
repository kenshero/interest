angular.module('buyHome', [])
  .controller('BuyhomeController', ['$scope', function($scope) {
    
    var count =1;
  
   $scope.Pays= [{
     No:0
   }];

   $scope.interests= [{
      MonthAinterest:"",
      MonthBinterest:"",
      inputInterest:""
   }];


    $scope.log = function(){

      var incount = [];
      $scope.resMoney=$scope.inputMoneyStart;
      $scope.Tables=[];
      var n=0 

      for (var i = 0; i < $scope.Pays.length; i++) {

        // if (i==0) 
        //   {
        //     incount[i]=$scope.Pays[i].start;
        //   }
        // else{
        //     incount[i]=$scope.Pays[i].start.number;
        //  }

        for(; n<$scope.Pays[i].end.number ;n++)
        {
         
            var tmp = {
              moneyFirst : $scope.resMoney,
              moneyPay   : $scope.Pays[i].interestPay,
              moneyResult: $scope.resMoney-$scope.Pays[i].interestPay
            };
          
          $scope.resMoney-=$scope.Pays[i].interestPay; 

          if ($scope.resMoney<$scope.Pays[i].interestPay)
           {
            alert("sadsa");

            var tmp = {
              moneyFirst : $scope.resMoney,
              moneyPay   : $scope.resMoney,
              moneyResult: 0
            };

            $scope.Tables.push(tmp);
            break;
           }

          $scope.Tables.push(tmp);
        }

           // $scope.Table+=
          
        
          
          //console.log(incount[i]);
      }

        console.log($scope.Tables);
     // console.log($scope.Pays.length);

      //console.log($scope.Pays[1].start);
      //console.log($scope.interests);

    };

    $scope.addPay = function(counter)
    {
      var tmp={
        No : counter
      };
      $scope.Pays.push(tmp);
    }

    $scope.addInterests = function()
    {

      var tmp={
        MonthAinterest:"",
        MonthBinterest:"",
        inputInterest:""
      };

      $scope.interests.push(tmp);
    }
    
    $scope.MonthVal = function(inputMonthVal)
    {


        var range=[{}];
        range.length = 0;
        

        for(var i = 1; i <= inputMonthVal ; i++)
        { 
          range.push({number : i});
        }


       console.log(range); 
       $scope.tests=range;
      console.log($scope.tests);
    }
     
  }]);