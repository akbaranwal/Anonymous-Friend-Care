<?php
$con=mysqli_connect("127.0.0.1","root","",'tip');
// Check connection
if (!$con)
  {
  #echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit(0);
  }

$reach_us =$_POST['reach_us'] ;
$reward   =$_POST['reward'] ;
$college  =$_POST['college'] ;
$college_incident =$_POST['college_incident'] ;
$address =$_POST['address'] ;
$city =$_POST['city'] ;
$zipcode =$_POST['zipcode'] ;
$criminal =$_POST['criminal']  ;
$branch =$_POST['branch']  ;
$type_of_crime =$_POST['type_of_crime'] ;
$description =$_POST['description'] ;
$code = rand(1,10000000000000);
$result = NULL;
$valid_code = FALSE;
$query1 = "SELECT * FROM critical_data WHERE code=$code";
#echo $query1;
do{
    $result = mysqli_query($con,$query1);
    if($result===FALSE){
        die(mysql_error());
    }
    $row = mysqli_fetch_array($result);
   $total = $row[0];
   if($total==0){
       $valid_code = TRUE;
   }
}while(!$valid_code);
#echo '<br/>';
#echo $code;
#echo '<br/>';
#echo $valid_code;
$query2 = "INSERT INTO critical_data (`criminal`, `address`, `city`, `zipcode`, `branch`, `type_of_crime`, `reach_us`, `reward`, `college_incident`, `description`, `code`) VALUES('$criminal', '$address', '$city',  '$zipcode', '$branch', '$type_of_crime', '$reach_us', '$reward', '$college_incident', '$description', '$code');";
##echo $query2;
$result = mysqli_query($con,$query2);
#$row = mysqli_fetch_array($result);
#echo "<br/>";
#echo $row;
if($result===FALSE){
    die(mysql_error());
}
else{
    echo $code;
}





?>