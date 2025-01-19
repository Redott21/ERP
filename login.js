document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simple validation (you can replace this with your own logic)
  if (username === 'Admin' && password === '244466666') {
      // Redirect to the student details page
      window.location.href = 'intro.html';
  } else if (username === 'Abdul' && password === '1234') {
      window.location.href = 'page1.html';
  }
    else if(username === 'Ayesha' && password === '1234'){
        window.location.href='page2.html';
    } 
    else if(username === 'Aman' && password === '1234'){
        window.location.href='page14.html';
    }
    else if(username === 'Deeksha' && password === '1234'){
        window.location.href='page3.html';
    }
    else if(username === 'Deepak' && password === '1234'){
        window.location.href='page4.html';
    }
    else if(username === 'Deepak Kumar' && password === '1234'){
        window.location.href='page5.html';
    }
    else if(username === 'Garv' && password === '1234'){
        window.location.href='page6.html';
    }
    else if(username === 'Komal' && password === '1234'){
        window.location.href='page7.html';
    }
    else if(username === 'Nikhil' && password === '1234'){
        window.location.href='page8.html';
    }
    else if(username === 'Rishi' && password === '1234'){
        window.location.href='page9.html';
    }
    else if(username === 'Sonali' && password === '1234'){
        window.location.href='page10.html';
    }
    else if(username === 'Tasleem' && password === '1234'){
        window.location.href='page11.html';
    }
    else if(username === 'Rohit' && password === '1234'){
        window.location.href='page13.html';
    }
    else if(username === 'Priyam' && password ==='1234'){
        window.location.href='page12.html';
    }
  else {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Invalid username or password. Please try again.';
  }
});
