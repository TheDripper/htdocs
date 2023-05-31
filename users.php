<?php
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_db = 'gong';

$mysqli = new mysqli(
	$db_host,
	$db_user,
	$db_password,
	$db_db
);

if ($mysqli->connect_error) {
	echo 'Errno: ' . $mysqli->connect_errno;
	echo '<br>';
	echo 'Error: ' . $mysqli->connect_error;
	exit();
}
$q = "SELECT * FROM MOCK_DATA";
$records = $mysqli->query($q);
$filtered = [];
$countries = $_GET['countries'];
if ($records->num_rows > 0) {
	while ($row = $records->fetch_assoc()) {
		if (in_array($row["country"], $countries)) {
			// printf("%s (%s)\n", $row["first_name"], $row["country"]);
			$filtered[] = $row;
		}
	}
	echo json_encode($filtered);
}

$mysqli->close();
