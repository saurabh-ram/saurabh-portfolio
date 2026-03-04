document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const omnitrixbutton = document.getElementById("omnitrix-button");
  const greenbutton = document.getElementById("button-frame-container-2");
  const omnitrixring = document.getElementById("omnitrix-ring");
  const leftparallelogram = document.getElementById("left-parallelogram");
  const rightparallelogram = document.getElementById("right-parallelogram");
  const rightbgparallelogram = document.getElementById(
    "right-bg-parallelogram"
  );
  const skillImage = document.getElementById("skill-image");

  let animation1Completed = false;
  let animation2Completed = false;
  let animation5Completed = false;
  let currentImage = 1;
  const totalNoOfImages = 28;

  const soundFiles = [
  "Omnitrix_scs_1.mp3",
  "Omnitrix_scs_2.mp3",
  "Omnitrix_scs_3.mp3",
  "Omnitrix_scs_4.mp3",
  "Omnitrix_scs_5.mp3",
  "Omnitrix_scs_6.mp3",
  "Omnitrix_scs_7.mp3",
  "Omnitrix_scs_8.mp3",
  "Omnitrix_scs_9.mp3",
  "Omnitrix_scs_10.mp3",
  "Omnitrix_scs_11.mp3",
  "Omnitrix_scs_12.mp3",
  "Omnitrix_scs_13.mp3",
  "Omnitrix_scs_14.mp3",
  ];

// Preload all sounds once
  const sounds = soundFiles.map(sfx => {
    const audio = new Audio(`sfx/${sfx}`);
    audio.preload = "auto";
    return audio;
  });
  const startSound = new Audio(`sfx/Omnitrix_start.mp3`);

  // Trigger animation-1 on clicking image-1
  if (greenbutton && omnitrixbutton) {
    greenbutton.addEventListener("click", () => {
      if (!animation1Completed) {
        omnitrixbutton.classList.toggle("animation1");
        // omnitrixbutton.classList.toggle("animation1");

        if (leftparallelogram && rightparallelogram && rightbgparallelogram) {
          // Trigger animation-2 with a delay of 0.5 seconds
          // setTimeout(() => {
          leftparallelogram.classList.add("animation2");
          rightparallelogram.classList.add("animation3");
          rightbgparallelogram.classList.add("animation4");
          skillImage.classList.add("animation6");

          // // Wait for animation-2 to complete
          // box.addEventListener("animationend", (event) => {
          //   if (event.animationName ==s= "animation2" && event.animationName === "animation3" && event.animationName === "animation4") {
          //   }
          // });
          // }, 500);

          playStartSound(startSound);

          setTimeout(() => {
            animation1Completed = true;
            animation2Completed = true;
          }, 2200);
        }
      }
    });
  } else {
    console.error("Element with id 'omnitrixbutton' not found!");
  }

  if (omnitrixring) {
    // Trigger animation-3 on clicking image-2
    omnitrixring.addEventListener("click", () => {
      if (animation1Completed && animation2Completed) {
        omnitrixring.classList.toggle("animation5");
        playSkillChangeSound(sounds);

        setTimeout(() => {
          omnitrixring.classList.toggle("animation5");
          updateSkillImage();
        }, 580);
        animation5Completed = true;
      }
      // console.log("Omnitrix Ring image clicked!");
    });
  } else {
    console.error("Element with id 'omnitrixring' not found!");
  }

  function updateSkillImage() {
    currentImage = (currentImage % totalNoOfImages) + 1;

    skillImage.src = `https://raw.githubusercontent.com/saurabh-ram/saurabh-portfolio/refs/heads/main/skills/${currentImage}.png`;
  }

  function playStartSound(startSound) {
    startSound.play();
  }
  function playSkillChangeSound(sounds) {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const selectedSound = sounds[randomIndex];
    selectedSound.play();
  }
});
