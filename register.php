<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
<?php 
	// 키값 생성 함수 
	function gen_activation_key($email)
	{ 
		$generatedKey = sha1(mt_rand(10000,99999).time().$email); 
		return $generatedKey; 
	}

	function verificationMAIL($gKEY,$email)
	{ 
		$to=$email; 
		$from='do-not-reply@ludenshouse.com'; 
		$subject='링크를 눌러 회원인증하세요 - 루덴스'; 
		$headers .= 'MIME-Version: 1.0' . "\r\n"; 
		$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n"; 
		$mailMsg='<a href = http://ludenshouse.com/activation.php?email='.$email.'&key='.$gKEY. '>http://ludenshouse.com/activation.php?email='.$email.'&key='.$gKEY. '</a>';

		mail($to,$subject,$mailMsg,$headers); 

	}
	function verifyEmailAddress($email, $vkey)
	{ 
		msConnect(); 
		$query=mysql_query("SELECT * FROM users WHERE email='$email' AND activation_key='$vkey'"); 
		$fetch=mysql_fetch_array($query); 
		if($fetch['activation_status'] == 'Active')
		{ 
			$output='Your Email has already been verified.'; 
		}else{ 
			$cnt=mysql_num_rows($query); 

			if($cnt=='1')
			{ 
				$updateQ=mysql_query("UPDATE users SET activation_status='Active' WHERE email='$email' AND activation_key='$vkey'"); 
				if($updateQ)
				{ 
					$output='Email Verified'; 
				}else
				{ 
					$output='System Faced an error while updating your status.'; 
				} 
			}else
			{ 
				$output='Unable to verify your email address.'; 
			} 
		} 
		mysql_close(); 
		return $output; 

	}


	$host = 'localhost';
	$db_id = 'user_name';
	$db_pw = 'user_password';
	$db_name = 'db_name';


	$conn = mysql_connect($host,$db_id,$db_pw) or die("db connect fail");

	mysql_select_db($db_name, $conn) or die('db select fail');
	include "./password.php"; 


	$id = $_POST['id'];
	$pw = $_POST['pw'];
	$school = $_POST['school'];
	$major = $_POST['major'];
	$number = $_POST['number'];
	$cnt = mysql_num_rows(mysql_query("SELECT mb_no FROM member"));
	$code = '';
	$code .= $school;
	$code .= $major;
	$code .= $number;
	$code .= $cnt+1;
	$key = gen_activation_key($id);


	$sql = "select * from member where mb_id = '$id'";
	$user_cnt = mysql_num_rows(mysql_query($sql));


	if(!empty($id) && $user_cnt == 0)
 	{
	/* 암호화 */	
		$hash = password_hash($pw, PASSWORD_DEFAULT);
		

		//$sql = 'select * from member';
		$sql = "insert into member (mb_no, mb_id, mb_pw,mb_school,mb_major,mb_number,mb_code,mb_time,mb_valid,mb_key) values(NULL,'$id','$hash','$school','$major','$number','$code',CURRENT_TIMESTAMP,0,'$key')";

		$res = mysql_query($sql);

	}
	else 
	{
		
		echo "<script>alert('아이디가 중복되었습니다.');history.back();</script>";
	        exit;
	}
	verificationMAIL($key,$id);
	mysql_close();


   echo "<meta http-equiv='refresh' content='0;url=index.html'>";

?>