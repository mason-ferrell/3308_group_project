<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>

		<link href="../../res/css/universal.css" rel="stylesheet"/>
		<style>
		h1{
			color : #e84855;
			text-align: center;
			font-size:100px;
			height:50px;
			text-shadow: 0px 5px 12px rgba(0,0,0, .35);
		}
		td{color:#e84855;}
		th{color:#e84855;}
		#bit{font-size:80px}
		#parent {position: relative;}

		#child {
			position: absolute;
			top: 50%;
			left: 50%;
			height: 30%;
			width: 50%;
			margin: 15% 0 0 -25%;
		}

		</style>

	</head>
	<body>
		<nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light" style="border-bottom: 2px solid #e84855;">
			<a class="navbar-brand" href="#" style="text-shadow:0px 3px 5px rgba(0,0,0,.15); font-weight:350;font-size:30px;color:#e84855;">Jimmy's Maze</a>
			<ul class=" navbar-nav mr-auto">
				<li class="navbar-item">
					<a class="nav-link" href="../../index.php">Home</a>
				</li>
				<li class="navbar-item ">
					<a class="nav-link" href="../leader_board/index.html">Leader Board</a>
				</li>
				<li class="navbar-item ">
					<a class="nav-link" href="../about/index.html">About</a>
				</li>
				<li class="navbar-item ">
					<a class="nav-link" href="../user_profile/index.html">Profile</a>
				</li>
			</ul>
			<a class="btn my-2 my-sm-0 rounded-circle btn-prof" style="padding:0px;padding-top:7px;padding-right:.5px;width:65px; height:65px;" href="#" >
				<img class="rounded-circle" src="../../res/img/profile.png" width="50px"height="50px"/>
			</a>
		</nav>
		<h1>Jimmy's Maze!</h1>
		<div class="container" id="parent">
			<table class="table table-bordered" id="child">
				<thead>
					<tr>
						<th>Rank</th>
						<th>Username</th>
						<th>Levels Completed</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>#1</td>
						<td/>
						<td/>
					</tr>
					<tr>
						<td>#2</td>
						<td/>
						<td/>
					</tr>
					<tr>
						<td>#3</td>
						<td/>
						<td/>
					</tr>
					<tr>
						<td>#4</td>
						<td/>
						<td/>

					</tr>
					<tr>
						<td>#5</td>
						<td/>
						<td/>

					</tr>
					<tr>
						<td>#6</td>
						<td/>
						<td/>

					</tr>
					<tr>
						<td>#7</td>
						<td/>
						<td/>

					</tr>
					<tr>
						<td>#8</td>
						<td/>
						<td/>

					</tr>
					<tr>
						<td>#9</td>
						<td/>
						<td/>

					</tr>
					<tr>
						<td>#10</td>
						<td/>
						<td/>

					</tr>
				</tbody>
			</table>
		</div>
	</body>
</html>
