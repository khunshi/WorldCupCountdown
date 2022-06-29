// milliseconds time converter //

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  


// making countdown work// 

  function countdown() {
    
    setInterval(countdown, 1000);

    const cupDate = new Date("21, Nov, 2022 07:00:00").getTime();

    const currentTime = new Date().getTime();

    const dif = cupDate - currentTime;
    
    

// converting milliseconds to readable time //

    const dayForm = Math.floor(dif / day);
    const hourForm = Math.floor((dif % day) / hour);
    const minuteForm = Math.floor((dif % hour) / minute);
    const secondForm = Math.floor((dif % minute) / second);



// putting time on display //

    document.querySelector("#days").innerText = dayForm;
    document.querySelector("#hours").innerText = hourForm;
    document.querySelector("#minutes").innerText = minuteForm;
    document.querySelector("#seconds").innerText = secondForm;
  };
  countdown()




// END //
