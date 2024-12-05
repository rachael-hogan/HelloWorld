<?php

namespace Rachaelhogan\HelloWorld\Backend;

class HelloWorld
{
    private $name;

    public function __construct()
    {
        $this->name = 'World';
    }

    public function sayHello(): string
    {
        return "Hello $this->name!";
    }

    public function putName($input = null): string
    {
        $this->name = $input;
        return "Hello $this->name!";
    }
}
