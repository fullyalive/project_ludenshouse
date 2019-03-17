<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
</head>
<body>
	
</body>
</html>
<?
	include "./password.php"; 

	//if(!isset($_POST['id']) || !isset($_POST['pw'])) exit;

	$user_id = $_POST['id'];
	$user_pw = $_POST['pw'];


	$host = 'localhost';
	$db_id = 'user_name'; 
	$db_pw = 'user_password!';
	$db_name = 'db_name';


	$conn = mysql_connect($host,$db_id,$db_pw) or die("db connect fail");
	mysql_select_db($db_name, $conn) or die('db select fail');
	

	$sql = "select * from member where mb_id = '$user_id'";
	$res = mysql_query($sql);
	while($row = mysql_fetch_array($res))
	{
	
		$members = array($row['mb_id'] =>array('pw'=> $row['mb_pw'],'pk' =>$row['mb_no']));
		
		
	}
	if(!isset($members[$user_id])) {
	        echo "<script>alert('아이디 또는 패스워드가 잘못되었습니다.');history.back();</script>";
	        exit;
	}
	if(!password_verify($user_pw, $members[$user_id]['pw'])) 
	{
	        echo "<script>alert('아이디 또는 패스워드가 잘못되었습니다.');history.back();</script>";
	        exit;
	}
	session_start();
	$_SESSION['user_id'] = $user_id;
	$_SESSION['user_no'] = $members[$user_id]['pk'];
	

   echo "<meta http-equiv='refresh' content='0;url=mypage.html'>";
?>