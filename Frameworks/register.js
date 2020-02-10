  // SECTION CODE FOR REGISTER VALIDATOR
  function Cek()
  {
      // ambil semua konten DOM dari form register
      var user = document.getElementById("user").value;
      var pass = document.getElementById("pass").value;
      var confirm = document.getElementById("confirm").value;
      var email = document.getElementById("email").value;
      var male = document.getElementById("male");
      var female = document.getElementById("female");
      var membertype = document.getElementById("member").value;
      var agree = document.getElementById("agree");
     
      
  
      //Basic Validation
  
      if(user == "") // Validasi Username Harus Diisi
      { err.innerHTML = "Please fill your username";}

      else if(user.length < 3) // Validasi Username Harus Minimal 3 Karakter
      {err.innerHTML = "Username Must Be Minimum 3 Character ";}
      
      else if(pass == "") // Validasi Password Harus Diisi
      {err.innerHTML = "Please fill your Password";}
      
      else if(confirm == "") // Validasi Confirm Password Harus Diisi
      {err.innerHTML = "Please confirm your Password ";}

      else if(confirm != pass) // Validasi Confirm Password Harus Sama Dengan Password
      {err.innerHTML = "Confirm Password Must Be Same With Password";}

      else if(email == "") // Validasi Email Harus Diisi
      {err.innerHTML = "Please fill your email";}
      
      else if(male.checked == false && female.checked == false) // Validasi Jenis Kelamin Harus Dipilih
      {err.innerHTML = "Please select your gender";}
     
      else if(membertype == "0") // Validasi member Harus Dipilih
      {err.innerHTML = "Please select your membership type ";}

      else if(agree.checked == false) // Validasi agree Harus Dipilih
      {err.innerHTML = "Please agree to our Terms & Conditions";}
      
      else
      {err.innerHTML = "";
      alert("Thank You For Registering to VIntage ^o^");
      register.submit();
      }
  
      // Advanced Validation
      var email = document.getElementById("email").value;
      if(email.indexOf(' ') != -1) // Untuk Mengecek Email Tidak Boleh Mengandung Spasi
      {
      err.innerHTML = "Email Cannot Have Space Character";
      return true;
      }
      else if(email.indexOf('@')== -1 || email.indexOf('.') == -1) //Untuk Mengecek Email Harus Mengandung @ dan .
      {
      err.innerHTML = "Email Must Have '@' and '.' ";
      return true;
      }
      else if(email.split('@').length > 2) // Untuk Mengecek Email Tidak Boleh Mengandung 2 @
  
      {
      err.innerHTML = "Email Cannot Have Two '@' ";
      return true;
      }
      else if(email.indexOf('@')== 0 || email.indexOf('.')== 0) // Untuk Mengecek Email Tidak Boleh Diawali @ dan .
      {
      err.innerHTML = "'@' and '.' Cannot Be The First Character ";
  
      return true;
      }
      else if(email.charAt(email.length-1)=='@' ||
      email.charAt(email.length-1)=='.') // Untuk Mengecek Email Tidak Boleh Diakhiri @ dan .
      {
      err.innerHTML = "'@' and '.' Cannot Be The Last Character ";
  
      return true;
      }
      else if(email.indexOf('.')==(email.indexOf('@')+1) ||
      email.indexOf('@')==(email.indexOf('.')+1)) // Untuk Mengecek Email Tidak Boleh @ Bersebelahan dengan .
      {
      err.innerHTML = "'@' Cannot Beside '.' ";
      return true;
      }
      else if(email.split('@').length ==2) // Untuk Mengecek Email Tidak Boleh Memiliki 2 Buah . Setelah @
      {
      var email2 = email.split('@');
  
      if(email2[1].indexOf('.') == -1)
      {
      err.innerHTML = "Email Must Have At Least One '.' After '@' ";
      return true;
      }
      else if(email2[0].charAt(email2[0].indexOf('.')+1)=='.' || email2[1].charAt(email2[1].indexOf('.')+1)=='.')
      {
      err.innerHTML = "'.' Cannot Beside '.' ";
      return true;
      }
      }
      else
      {
      return false;
      }
  
  
  }