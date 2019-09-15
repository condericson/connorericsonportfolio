window.onload = function () {
  $(".hidiv").addClass("transitions");
  $(".introPDiv").addClass("transitions");
  setInterval(function () {
    $(".hidiv").addClass("hidivDisplayed");
  }, 400);

  setInterval(function () {
    $(".introPDiv").addClass("introPDivDisplayed");
  }, 1200);

  setInterval(function () {
    $(".openingSection").addClass("fadeOut");
  }, 2500);

  setInterval(function () {
    $(".openingSection").addClass("hidden");
  }, 3000);

  setInterval(function () {
    $(".experienceLink").addClass("shown");
  }, 3300);

  setInterval(function () {
    $(".techLink").addClass("shown");
  }, 3600);

  setInterval(function () {
    $(".projectsLink").addClass("shown");
  }, 3900);

  scrollManager();
};

function scrollManager() {
  var contactSectionFromTop = $('.contactSection').offset().top - window.innerHeight;
  $(window).scroll(function () {
    var bodyTop = $(window).scrollTop();
    if (bodyTop > contactSectionFromTop) {
      chatSlideIn();
    }
  });
};

function chatSlideIn() {
  setInterval(function () {
    $('.wanttochat').addClass('slideInChat');
  }, 0);
  setInterval(function () {
    $('.emailDiv').addClass('slideInEmail');
  }, 400);

  setInterval(function () {
    $('.linkedinDiv').addClass('slideInLinked');
  }, 800);
  setInterval(function () {
    $('.emailaddress').addClass('slideInEmailAddress');
  }, 1600);
  setInterval(function () {
    $('.backToTop').addClass('backToTopShown');
  }, 400);
}

$('.experienceLink').click(function () {
  $('html,body').animate({
    scrollTop: $(".professionalSectionHeader").offset().top
  },
    1000);
});

$('.projectsLink').click(function () {
  $('html,body').animate({
    scrollTop: $(".portfolioSectionHeader").offset().top
  },
    1000);
});

$(".techLink").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".technologySection").offset().top
    },
    1000
  );
});

$(".backToTop").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("body").offset().top
    },
    1000
  );
});

$('.backToTop').click(function () {
  $('html,body').animate({
    scrollTop: $("body").offset().top
  },
    1000);
});

