<div class="container">
	<div class="row justify-content-center">
		<div class="col-12 col-md-6 table_white">
			<form role='form' method="post" id="post_form1" action="" >
				<div class="form-group">
					<label for="name">First Name</label>
					<input type="text" class="form-control" name="name"  minlength="2" maxlength="10" required placeholder="Enter Your firs t name"/>
					<p class="help-block res_name">Please use only A-Z characters</p>
				</div>
				<div class="form-group">
					<label for="surname">Second Name</label>
					<input type="text" class="form-control" name="surname" required minlength="2" maxlength="20" placeholder="Enter Your last name"/>
					<p class="help-block res_surname">Please use only A-Z characters</p>
				</div>
				<div class="form-group">
					<label for="age">Your age</label>
					<input type="number" class="form-control" name="age" required  min="18" max="100" placeholder="Enter Your age">
					<p class="help-block res_age">Age from 18 to 100</p>
				</div>
				<div class="form-group">
					<label for="license">Your driver license</label>
					<input  type="text" class="form-control" name="license"  minlength="6" maxlength="10" required placeholder="Your driver license"/>
					<p class="help-block res_lic">Please use only A-Z or 0-9 characters</p>
				</div>
				<div class="row justify-content-center">
					<div class="col-md-6 col-6 text-center">
						<button type="submit" id="btn1" class="btn btn-block btn-lg btn-success ">OK</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
