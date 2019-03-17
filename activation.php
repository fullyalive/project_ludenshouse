<?
	$email = $_GET['email'];
	$key = $_GET['key'];
	function verifyEmailAddress($email, $vkey)
	{  
		$host = 'localhost';
		$db_id = 'user_name';
		$db_pw = 'user_password';
		$db_name = 'db_name';


		$conn = mysql_connect($host,$db_id,$db_pw) or die("db connect fail");

		mysql_select_db($db_name, $conn) or die('db select fail');

		$query=mysql_query("SELECT * FROM member WHERE mb_id='$email' AND mb_key='$vkey'"); 
		$fetch=mysql_fetch_array($query); 
		if($fetch['mb_key'] == 1)
		{ 
			$output='Your Email has already been verified.'; 
		}else{ 
			$cnt=mysql_num_rows($query); 

			if($cnt=='1')
			{ 
				$updateQ=mysql_query("UPDATE member SET mb_valid=1 WHERE mb_id='$email' AND mb_key='$vkey'"); 
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

	verifyEmailAddress($email,$key);


   echo "<meta http-equiv='refresh' content='0;url=login.html'>";

?>