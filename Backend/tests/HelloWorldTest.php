<?php

use PHPUnit\Framework\TestCase;
use Rachaelhogan\HelloWorld\Backend\HelloWorld;

class HelloWorldTest extends TestCase
{
    public function testSayHello()
    {
        $helloWorld = new HelloWorld();
        $this->assertEquals('Hello World!', $helloWorld->sayHello());
    }

    public function testPutName()
    {
        $helloWorld = new HelloWorld();
        $this->assertEquals('Hello John!', $helloWorld->putName('John'));
        $this->assertEquals('Hello John!', $helloWorld->sayHello());
    }
}
