# IP-Address-Management-Solution-AD-Group
Full Stack Engineer Practical Test


Installation and Usage instructions

* For Backend
1. Open a git bash / powershell terminal and cd to "backend" directory.
2. On "backend" directory, open/create and edit the ".env" file to specify the db connection env.

    ex. 
        
        DB_CONNECTION=mysql
    
        DB_HOST=127.0.0.1
        
        DB_PORT=3306
        
        DB_DATABASE=ipms
        
        DB_USERNAME=root
        
        DB_PASSWORD=
        
    Also add "AUDITING_ENABLED=true" to the .env file.
    
 3. after that run "composer install" (needs composer to be installed) to download dependencies.
 4. then run "php artisan migrate" to migrate all the needed tables to the db provided to env file.
 5. then run "php artisan serve" and it would serve it on your local (ex. http://127.0.0.1:8000)


* For Front-End
1. Open a git bash / powershell terminal and cd to "frontend" directory.
2. On "frontend" directory, run "npm install" to download dependencies. (Needs npm installed).
3. Once installed, run "ng serve" and it would serve it also on your local (ex. http://localhost:4200/)

To access the site, please go to "http://localhost:4200/"


** Important Note **
- I have not added a register or any account management for this.
- To add a user, please use the ff. commands :
  
  On backend directory 
  run "php artisan tinker" and type "DB::table('users')->insert(['name'=>'test_name','email'=>'test@myemail.com','password'=>Hash::make('123456')])"
  
  If you run this command, you should be able to login using
 
  Email : test@myemail.com
  
  Password : 123456
 
 
  
