@isTest
public with sharing class DemoClass_Test {
   
    @isTest
    public static void multiplyNumbers_PositiveOut (){
        

        Test.startTest();
            DemoClass demClass = new DemoClass();
            demClass.multiplyNum(3, 2);
        Test.stopTest();

    }
}