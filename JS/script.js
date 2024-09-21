console.log(window.location);

if (window.location.pathname.endsWith("register.html")) {
  // VALIDASI REGISTER

  const form = document.getElementById("regis-form");
  console.log(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = form[0].value;
    console.log(username);

    const email = form[1].value;
    console.log(email);

    const password = form[2].value;
    console.log(password);

    const phoneNumber = form[3].value;
    let isValid = true;
    console.log(phoneNumber);

    const age = form[4].valueAsNumber;
    console.log(age);

    const genderMale = form[5].value;
    console.log(genderMale);

    const genderFemale = form[6].value;
    console.log(genderFemale);

    if (username == "" || username.length < 4) {
      alert("Name must be at least 4 characters");
      return;
    }

    if (email == "" || !email.endsWith("@gmail.com")) {
      alert("Email must be end with @gmail.com");
      return;
    }

    if (password == "" || password.length < 8) {
      isValid = false;
      alert("Password must be at least 8 characters");
      return;
    }

    if (phoneNumber.length < 10 || phoneNumber.length > 14) {
      alert("Phone number must be between 10 and 14 digits");
      return;
    }

    for (let i = 0; i < phoneNumber.length; i++) {
      const char = phoneNumber.charAt(i);
      const charCode = char.charCodeAt(0);

      if (charCode < 48 || charCode > 57) {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      alert("Please enter a valid phone number (digits only)");
      return;
    }

    if (age < 14) {
      alert("Your age must be at least 14 years old");
      return;
    }

    // alert("Register Success");
    window.location.href = "Index.html";
  });

  // BUTTON FOR REGISTER BUTTON TO INDEX.HTML
  function enterPage() {
    // window.location.href = "Index.html";
  }

  // SLIDER FOR INPUT AGE ON REGISTER PAGE
  var slider = document.getElementById("ageRange");
  var output = document.getElementById("value");

  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };

  slider.addEventListener("mousemove", function () {
    var x = slider.value;
    var color =
      "linear-gradient(90deg, rgb(117, 252, 117)" +
      x +
      "%, rgb(214, 214, 214)" +
      x +
      "%)";
    slider.style.background = color;
  });

  const sliderValue = document.querySelector("span");
  const inputSlider = document.querySelector("input");
  inputSlider.oninput = () => {
    let value = inputSlider.value;
    sliderValue.textContent = value;
    sliderValue.style.left = value / 2 + "%";
    sliderValue.classList.add("show");
  };
  inputSlider.onblur = () => {
    sliderValue.classList.remove("show");
  };
}

// BUTTON FOR HOME MP3 TO SONG DETAIL PAGE
if (window.location.pathname.endsWith("Index.html")) {
  function songDetail() {
    window.location.href = "songdetail.html?id=cancer";
  }
}

if (!window.location.pathname.endsWith("register.html")) {
  // POP UP MENU SIDEBAR
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const sidebar = document.querySelector(".sidebar");

  menuOpen.addEventListener("click", () => (sidebar.style.left = "0"));
  menuClose.addEventListener("click", () => (sidebar.style.left = "-100%"));
}

// SONG DETAIL (IMG, TITLE, SINGER, AUDIO, LYRICS, DESC, DESC IMG)

const songs = [
  {
    id: "perfect_edsheeran",
    title: "Perfect",
    singer: "Ed Sheeran",
    image: "assets/edsheeran.png",
    audio: "assets/audio/perfect.mp3",
    lyrics: `I found a love, for me
      Darling, just dive right in and follow my lead
      Well, I found a girl, beautiful and sweet
      Oh, I never knew you were the someone waiting for me
      'Cause we were just kids when we fell in love
      Not knowing what it was
      I will not give you up this time
      But darling, just kiss me slow
      Your heart is all I own
      And in your eyes, you're holding mine
      Baby, I'm dancing in the dark
      With you between my arms
      Barefoot on the grass
      Listening to our favourite song
      When you said you looked a mess
      I whispered underneath my breath
      But you heard it
      Darling, you look perfect tonight
      Well, I found a woman, stronger than anyone I know
      She shares my dreams, I hope that someday I'll share her home
      I found a lover, to carry more than just my secrets
      To carry love, to carry children of our own
      We are still kids, but we're so in love
      Fighting against all odds
      I know we'll be alright this time
      Darling, just hold my hand
      // Be my girl, I'll be your man
      I see my future in your eyes
      Baby, I'm dancing in the dark
      With you between my arms
      Barefoot on the grass
      Listening to our favorite song
      When I saw you in that dress, looking so beautiful
      I don't deserve this
      Darling, you look perfect tonight
      Baby, I'm dancing in the dark
      With you between my arms
      Barefoot on the grass
      Listening to our favorite song
      I have faith in what I see
      Now I know I have met an angel in person
      And she looks perfect
      I don't deserve this
      You look perfect tonight`,

    descImg: "assets/edsheeran.png",
    songDesc: `"Perfect" is a song by English singer-songwriter Ed Sheeran from his third studio album, ÷ (2017). After the album's release, it charted at number four on the UK Singles Chart. On 21 August 2017, Billboard announced that "Perfect" would be the fourth single from the album. The song was serviced to pop radio on 26 September 2017 as the third single from the album in the United States (fourth overall). The second version of the single, titled "Perfect Duet", with American singer Beyoncé, was released on 1 December 2017. Another duet with Italian singer Andrea Bocelli, titled "Perfect Symphony", was released on 15 December 2017.

      Originally peaking at number four in March 2017, the song re-entered the UK Singles Chart later that year. After the publication of "Duet" version the song reached number one on the UK Chart in December 2017. For the high sales of its version compared to the original one, Beyoncé was credited on several official sales charts, becoming her sixth Billboard Hot 100 number one song and Sheeran's second. The song also peaked at number one in sixteen other countries, including Australia, Canada, Ireland, Malaysia, New Zealand, Singapore, and many European and Latin American countries.
      
      The original song’s official music video received three nominations at the 2018 MTV Video Music Awards.`,
  },

  {
    id: "lazysong",
    title: "The Lazy Song",
    singer: "Bruno Mars",
    image: "assets/brunomars.png",
    audio: "assets/audio/thelazysong.mp3",
    lyrics: `Today, I don't feel like doing anything
      I just wanna lay in my bed
      Don't feel like picking up my phone
      So leave a message at the tone
      'Cause today, I swear I'm not doing anything
      Uh, I'm gonna kick my feet up then stare at the fan
      Turn the TV on, throw my hand in my pants
      Nobody's gon' tell me, I can't, nah
      I'll be lounging on the couch, just chilling in my Snuggie
      Click to MTV, so they can teach me how to dougie
      'Cause in my castle, I'm the freaking man
      Oh-oh, yes, I said it, I said it
      I said it 'cause I can
      Today, I don't feel like doing anything
      I just wanna lay in my bed
      Don't feel like picking up my phone
      So leave a message at the tone
      'Cause today, I swear I'm not doing anything
      Nothing at all (ooh-ooh-ooh, ooh-ooh-ooh, ooh-ooh-ooh)
      Nothing at all (ooh-ooh-ooh, ooh-ooh-ooh, ooh-ooh-ooh)
      Tomorrow, I'll wake up, do some P90X
      Meet a really nice girl, have some really nice sex
      And she's gonna scream out, "This is great"
      (Oh, my God, this is great) yeah
      I might mess around and get my college degree
      I bet my old man will be so proud of me
      But sorry, pops, you'll just have to wait
      Oh-oh-oh, yes, I said it, I said it
      I said it 'cause I can
      Today, I don't feel like doing anything
      I just wanna lay in my bed
      Don't feel like picking up my phone
      So leave a message at the tone
      'Cause today, I swear I'm not doing anything
      No, I ain't gonna comb my hair
      'Cause I ain't going anywhere
      No, no, no, no, no, no, no, no, no, oh
      I'll just strut in my birthday suit
      And let everything hang loose
      Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah
      Oh-oh-oh, today, I don't feel like doing anything
      I just wanna lay in my bed
      Don't feel like picking up my phone
      So leave a message at the tone
      'Cause today, I swear I'm not doing anything
      Nothing at all (ooh-ooh-ooh, ooh-ooh-ooh, ooh-ooh-ooh)
      Nothing at all (ooh-ooh-ooh, ooh-ooh-ooh, ooh-ooh-ooh)
      Nothing at all`,

    descImg: "assets/brunomars.png",
    songDesc: `"The Lazy Song" is a song by American singer-songwriter Bruno Mars for his debut studio album, Doo-Wops & Hooligans (2010). It was serviced to contemporary hit radios in the United States on February 15, 2011, as the album's third single by Atlantic and Elektra. Development of "The Lazy Song" began while Mars, Philip Lawrence and Ari Levine were hanging around the studio and didn't feel like working. The trio produced the track under their alias, the Smeezingtons, and wrote the song in collaboration with rapper K'naan. Musically, "The Lazy Song" has been described as borrowing "heavily from roots reggae" and has been compared to the reggae style of Jason Mraz, while lyrically it is an anthem to laziness.

      "The Lazy Song" reached number four on the US Billboard Hot 100, while it topped the charts in Denmark and in the United Kingdom. It charted on most markets within the top five. It was certified seven times platinum by the Recording Industry Association of America (RIAA), five times by the Australian Recording Industry Association (ARIA) and four times by Music Canada (MC), respectively. It was one of the best selling digital singles of 2011 with sales of 6.5 million copies. Cameron Duddy and Mars directed the accompanying music video, in which Mars hangs out with five dancers wearing monkey masks while jesting around in his underwear. Mars sang "The Lazy Song" on the television show American Idol and performed it during The Doo-Wops & Hooligans Tour (2010–12), the Hooligans in Wondaland Tour (2011), and occasionally on The Moonshine Jungle Tour (2013–14).`,
  },

  {
    id: "blueming",
    title: "Blueming",
    singer: "IU",
    image: "assets/IU.png",
    audio: "assets/audio/blueming.mp3",
    lyrics: `'뭐해?'라는 두 글자에
        '네가 보고 싶어' 나의 속마음을 담아 우
        이모티콘 하나하나 속에
        달라지는 내 미묘한 심리를 알까 우
        아니 바쁘지 않아 nothing no no
        잠들어 있지 않아 insomnia-nia-nia
        지금 다른 사람과 함께이지 않아
        응, 나도 너를 생각 중
        우리의 네모 칸은 bloom
        엄지손가락으로 장미꽃을 피워
        향기에 취할 것 같아 우
        오직 둘만의 비밀의 정원
        I feel bloom, I feel bloom, I feel bloom
        너에게 한 송이를 더 보내
        밤샘 작업으로 업데이트
        흥미로운 이 작품의 지은이 that's me 우
        어쩜 이 관계의 클라이맥스
        2막으로 넘어가기엔 지금이 good timing 우
        같은 맘인 걸 알아 realize-la-lize
        말을 고르지 말아 just reply-la-la-ly
        조금 장난스러운 나의 은유에
        네 해석이 궁금해
        우리의 색은 gray and blue
        엄지손가락으로 말풍선을 띄워
        금세 터질 것 같아 우
        호흡이 가빠져 어지러워
        I feel blue, I feel blue, I feel blue
        너에게 가득히 채워
        띄어쓰기없이 보낼게 사랑인 것 같애
        백만송이 장미꽃을, 나랑 피워볼래?
        꽃잎의 색은 우리 마음 가는 대로 칠해
        시들 때도 예쁘게
        우리의 네모 칸은 bloom
        엄지손가락으로 장미꽃을 피워
        향기에 취할 것 같아 우
        오직 둘만의 비밀의 정원
        I feel bloom, I feel bloom, I feel bloom
        너에게 한 송이를 더 보내`,

    descImg: "assets/IU.png",
    songDesc: `"Blueming" is a song by South Korean singer-songwriter IU, serving as the second single from her seventh Korean-language extended play (EP) Love Poem. It was released on November 18, 2019, through Kakao M, and was co-written by IU, Lee Jong-hoon and Lee Chae-kyu, with production handled by the latter two. Lyrically, the song expresses the sentiments of what it means to live and love in modern-day society.

        Commercially, the song was a success in South Korea, topping the Gaon Digital Chart and became her 15th number-one single and 22nd number-one song overall. Additionally, "Blueming" achieved the number one position on the Billboard K-pop Hot 100 and ranked number five on the year-end Gaon Digital Chart for 2020. It won the Digital Daesang award at the 35th Golden Disc Awards in January 2021.`,
  },

  {
    id: "doubletake",
    title: "double take",
    singer: "dhruv",
    image: "assets/dhruv.png",
    audio: "assets/audio/doubletake.mp3",
    lyrics: `I could say I never dare
        To think about you in that way, but
        I would be lyin'
        And I pretend I'm happy for you
        When you find some dude to take home
        But I won't deny that
        In the midst of the crowds
        In the shapes in the clouds
        I don't see nobody but you
        In my rose-tinted dreams
        Wrinkled silk on my sheets
        I don't see nobody but you
        Boy, you got me hooked onto something
        Who could say that they saw us coming?
        Tell me
        Do you feel the love?
        Spend a summer or a lifetime with me
        Let me take you to the place of your dreams
        Tell me
        Do you feel the love?
        And I could say I never unzipped
        Those blue Levi's inside my head
        But that's far from the truth
        Don't know what's come over me
        It seems like yesterday when I said
        "We'll be friends forever"
        Constellations of stars
        Murals on city walls
        I don't see nobody but you
        You're my vice, you're my muse
        You're a nineteenth floor view
        I don't see nobody but you
        Boy, you got me hooked onto something
        Who could say that they saw us coming?
        Tell me
        Do you feel the love?
        Spend a summer or a lifetime with me
        Let me take you to the place of your dreams
        Tell me
        Do you feel the love?
        Boy, you got me hooked onto something
        Who could say that they saw us coming?
        Tell me
        Do you feel the love?
        Spend a summer or a lifetime with me
        Let me take you to the place of your dreams
        Tell me
        Do you feel the love?
        Do you feel the love?
        Do you feel the love?
        Do you feel the love?
        Do you feel the love?
        Feel the love
        Do you feel the love?`,

    descImg: "assets/dhruv.png",
    songDesc: `“double take” follows dhruv as he falls in love with one of his friends, and he wonders if his friend feels the same way.`,
  },

  {
    id: "drunk",
    title: "drunk",
    singer: "keshi",
    image: "assets/keshi.png",
    audio: "assets/audio/drunk.mp3",
    lyrics: `All my friends are drunk again
        And I'm stumblin' back to bed all by myself
        Don't need nobody else
        All my friends are drunk again
        And I'm stumblin' back to bed all by myself
        Don't need nobody else
        Smell like smoke, nuit de l'homme
        It's been a while since we last spoke
        So tell me, how's it go?
        Still love blues, nothin' new
        Careless love, I've had a few
        How 'bout you?
        All my friends are drunk again
        And I'm stumblin' back to bed all by myself
        Don't need nobody else
        All my friends are drunk again
        And I'm stumblin' back to bed all by myself
        Don't need nobody else
        I never have thought
        When you're gone
        I'd find it hard to carry on
        And it's probably 'cause
        I fell in love way back then
        And I think about us when
        I think about us when
        All my friends are drunk again
        And I'm stumblin' back to bed all by myself
        I got nobody else
        All my friends are drunk again
        And I'm stumblin' back to bed all by myself
        I got, I got nobody else`,

    descImg: "assets/keshi.png",
    songDesc: `"Drunk" by Keshi is a song about loneliness and longing. The speaker reflects on a former relationship and reminisces on the past and how different things would have been if they were still together. The chorus suggests that the singer is alone, despite being surrounded by friends who are all drinking, and is making his way back to bed all by himself. The lyrics highlight the sadness of realizing that no one can fill the void that is left when someone leaves, and how empty the speaker feels.`,
  },

  {
    id: "takeachance",
    title: `Take A Chance With Me`,
    singer: "NIKI",
    image: "assets/niki.png",
    audio: "assets/audio/takeachancewithme.mp3",
    lyrics: `His laugh you'd die for, his laugh you'd die for
        The kind that colors the sky
        Heart intangible, slips away faster
        Than dandelion fluff in the sunlight
        And he's got swirls of passion in his eyes
        Uncovering the dreams he dreams at night
        As much and hard as he tries to hide
        I can see right through
        See right through
        His voice you'd melt for, he says my name like
        I'd fade away somehow if he's too loud
        What I would give for me to get my feet
        Back on the ground, head off the clouds
        I laugh at how we're polar opposites
        I read him like a book and he's a clueless little kid
        Doesn't know that I'd stop time and space
        Just to make him smile
        Make him smile
        Oh, why can't we for once
        Say what we want, say what we feel?
        Oh, why can't you for once
        Disregard the world and run to what you know is real?
        Take a chance with me
        Take a chance with me
        Ooh
        Ooh
        His kiss you'd kill for, just one and you're done for
        Electricity surgin' in the air
        He drives me crazy, it's so beyond me
        How he'd look me dead in the eye and stay unaware
        That I'm hopelessly captivated
        By a boy who thinks love's overrated
        How did I get myself in this arrangement?
        It baffles me too, baffles me too
        Oh, why can't we for once
        Say what we want, say what we feel?
        Oh, why can't you for once
        Disregard the world and run to what you know is real?
        In the end, we only regret
        The chances we didn't take
        I'll be your safety net
        So why not raise the stakes?
        I can hear your heart from across the room
        Pulsin' through my veins, I know you need this too
        Lie to me all you please
        I can see right through
        See right through
        Oh, why can't we for once
        Say what we want, say what we feel?
        Oh, why can't you for once
        Disregard the world and run to what you know is real?
        Oh, why can't we for once
        Say what we want, say what we feel?
        Oh, why can't you for once
        Disregard the world and run to what you know is real?
        Take a chance with me
        Take a chance with me
        Ooh`,

    descImg: "assets/niki.png",
    songDesc: `NIKI, Nicole Zefanya, put out her second album “Nicole” earlier this year during the summer time. The album provided a cool and carefree feeling but also gave the listener a glimpse into some stories of her school years. Most of the songs on this project were originally written during that time; “Take A Chance With Me” being one of those songs originally written in 2015.

        “Take A Chance With Me” is a breath of fresh air, an unbreakable seal of bittersweetness and pays homage to old 2000s songs. Being the final song on the album, this provides the listener with a new beginning as opposed to the songs before, which were chapters closing of her past.
        
        NIKI is in a space of excitement as she sings in a curious way describing her new lover through each line. The song introduces itself with a normal-paced electric guitar, with what sounds like hints of a piano, or a harp. 
        
        This smoothly sets the mood as she sings, “His laugh you’d die for, His laugh you’d die for. / The kind that colors the sky,” she sings, “Heart intangible, slips away faster than dandelion fluff in the sunlight.”
        
        As the verses are pretty long, each approach themselves as build-ups with a faster pace, as she sounds more excited through each word sung, “And he’s got swirls of passion in his eyes. /Uncovering the dreams, he dreams at night. /As much and hard as he tries to hide, I can see right through, see right through.”
        
        Verse two still has the same build but with replacement sounds of ukulele strums, and what sounds like a güiro sound instrumental. 
        
        NIKI sings, “His voice you’d melt for, he says my name like I’ll fade away somehow if he’s too loud. / What I would give for me to get my feet back on the ground, head off the clouds,” she sings with a quicker pace, “I laugh at how we’re polar opposites. / I read him like a book, and he’s a clueless little kid. / Doesn’t know that I’d stop time and space/ Just to make him smile, make him smile.”
        
        As the chorus begins, NIKI’s isolated vocal comes to focus, a vulnerable yet key moment as she is wondering why they both can’t be open and honest. 
        
        “Oh, why can’t we for once. / Say what we want, say what we feel? /Oh, why can’t we for once/ Disregard the world and run to what you know is real? / Take a chance with me,” NIKI sings. 
        
        You can easily notice a melody that is uncanny to a Liz Phair song called “Why Can’t I?” if you have a good ear.
        
        She then goes on to sing in verse three, continuing to describe all the things that draw her to this boy. Especially the fact that he thinks love is overrated, she shows more confusion in this verse. The bridge could give the listener the image of, “admiring someone from across the room,” but she also dances through this bridge with safety towards her lover, only to later complete the final chorus once more, ending the song with ease.`,
  },

  {
    id: "loveyourself",
    title: "Love Yourself",
    singer: "Justin Bieber",
    image: "assets/justinbieber.png",
    audio: "assets/audio/loveyourself.mp3",
    lyrics: `For all the times that you rained on my parade
        And all the clubs you get in using my name
        You think you broke my heart, oh, girl for goodness' sake
        You think I'm cryin' on my own. Well, I ain't
        
        And I didn't wanna write a song
        'Cause I didn't want anyone thinking I still care. I don't
        But you still hit my phone up
        And, baby, I'll be movin' on
        And I think you should be somethin' I don't wanna hold back
        Maybe you should know that
        
        My mama don't like you and she likes everyone
        And I never like to admit that I was wrong
        And I've been so caught up in my job
        Didn't see what's going on
        But now I know
        I'm better sleeping on my own
        
        'Cause if you like the way you look that much
        Oh, baby, you should go and love yourself
        And if you think that I'm still holdin' on to somethin'
        You should go and love yourself
        
        But when you told me that you hated my friends
        The only problem was with you and not them
        And every time you told me my opinion was wrong
        And tried to make me forget where I came from
        
        And I didn't wanna write a song
        'Cause I didn't want anyone thinking I still care. I don't
        But you still hit my phone up
        And, baby, I'll be movin' on
        And I think you should be somethin' I don't wanna hold back
        Maybe you should know that
        
        My mama don't like you and she likes everyone
        And I never like to admit that I was wrong
        And I've been so caught up in my job
        Didn't see what's going on
        But now I know
        I'm better sleeping on my own
        
        'Cause if you like the way you look that much
        Oh, baby, you should go and love yourself
        And if you think that I'm still holdin' on to somethin'
        You should go and love yourself
        
        For all the times that you made me feel small
        I fell in love. Now I feel nothin' at all
        I never felt so low and I was vulnerable
        Was I a fool to let you break down my walls?
        
        'Cause if you like the way you look that much
        Oh, baby, you should go and love yourself
        And if you think that I'm still holdin' on to somethin'
        You should go and love yourself
        
        'Cause if you like the way you look that much
        Oh, baby, you should go and love yourself
        And if you think (you think) that I'm (that I'm) still holdin' on (holdin' on) to somethin'
        You should go and love yourself`,

    descImg: "assets/justinbieber.png",
    songDesc: `"Love Yourself" is a song recorded by Canadian singer Justin Bieber for his fourth studio album Purpose (2015). The song was released as a promotional single on November 9, 2015, and as the album's third official single on December 7, 2015.[citation needed] It was written by Bieber, Ed Sheeran and Benjamin Levin, and produced by the latter. A pop song, "Love Yourself" features an electric guitar and a brief flurry of trumpets as its main instrumentation. During the song, Bieber uses a husky tone in the lower registers. Lyrically, the song is a kiss-off to a narcissistic ex-lover.

        On the US Billboard Hot 100 and the UK Singles Chart, the song became Bieber's third consecutive number-one, wherein the United States it spent 24 non-consecutive weeks in the top ten (later named the best-performing single of 2016) and was also Bieber's first number one on the Adult Contemporary chart, while in the United Kingdom, it spent six weeks at the top. "Love Yourself" topped the charts in fifteen countries, including Australia, Brazil, Canada, New Zealand, and Sweden. "Love Yourself" was nominated for two Grammy Awards: Song of the Year and Best Pop Solo Performance. It was the seventh-best-selling song of 2016 in the US.
        
        The music video for the song was released along with the Purpose: The Movement project on November 14, 2015. It features dancers Keone & Mari Madrid doing an interpretive dance in a house. Bieber promoted the song with performances on TV shows, as well as awards shows throughout 2015–16 while adding it on the set list of his Purpose World Tour.`,
  },

  {
    id: "onlylove",
    title: "Only Love",
    singer: "Trademark",
    image: "assets/trademark.png",
    audio: "assets/audio/onlylove.mp3",
    lyrics: `2 a.m. and the rain is falling
        Here we are at the crossroads once again
        You're telling me you're so confused
        You can't make up your mind
        Is this meant to be
        You're asking me
        
        But only love can say - try again or walk away
        But I believe for you and me
        The sun will shine one day
        So I'll just play my part
        And pray you'll have a change of heart
        But I can't make you see it through
        That's something only love can do
        
        In your arms as the dawn is breaking
        Face to face and a thousand miles apart
        I've tried my best to make you see
        There's hope beyond the pain
        If we give enough, if we learn to trust
        
        But only love can say - try again or walk away
        But I believe for you and me
        The sun will shine one day
        So I'll just play my part
        And pray you'll have a change of heart
        But I can't make you see it through
        That's something only love can do
        You might also like
        Heaven Knows (The Angel Has Flown)
        Orange & Lemons
        Not Like Us
        Kendrick Lamar
        ​euphoria
        Kendrick Lamar
        I know if I could find the words
        To touch you deep inside
        You'd give our dream just one more chance
        Don't let this be our last good-bye
        
        But only love can say - try again or walk away
        But I believe for you and me
        The sun will shine one day
        So I'll just play my part
        And pray you'll have a change of heart
        But I can't make you see it through
        That's something only love can do
        
        That's something only love can do`,

    descImg: "assets/trademark.png",
    songDesc: `The song "Only Love" by Trademark explores the power of love in a relationship that is at a crossroads. The lyrics depict a situation where the narrator's partner is unsure about the future of their relationship and is seeking guidance. The essence of the song is centered around the theme that only love has the ability to determine whether the couple should try again or part ways.

        The opening lines set a melancholic atmosphere, with the mention of rain falling at 2 a.m. This imagery suggests a sense of emotional turmoil and uncertainty. The narrator's partner expresses confusion and indecisiveness, unable to make up their mind about the relationship. They turn to the narrator, seeking guidance and answers.
        
        The chorus highlights the power of love in such situations. It emphasizes that only love can provide the answers and that the future of the relationship depends on whether they choose to try again or walk away. Despite the uncertainty, the narrator believes that there is hope for the relationship and that eventually, things will improve ("The sun will shine one day").
        
        The second verse introduces a physical distance between the couple, as they face each other but feel miles apart. The narrator expresses their efforts to make their partner see that there is hope beyond the pain they are experiencing. They mention the importance of giving enough and learning to trust for the relationship to flourish.
        
        The bridge expresses the narrator's longing to find the right words to touch their partner's heart and convince them to give their dream another chance. They plead for the relationship not to end and not to be their "last good-bye."
        
        In the final chorus, the message remains the same. The narrator reiterates that only love can ultimately determine the fate of their relationship. They express their willingness to play their part and hope that their partner will have a change of heart. However, they recognize that they cannot force their partner to see things through; it is something that only love can accomplish.
        
        Overall, "Only Love" portrays a situation where the narrator believes in the power of love to overcome obstacles and bring clarity to a relationship that is experiencing doubt. The song emphasizes the need for trust, communication, and an open heart as essential elements in navigating a difficult and uncertain phase in a partnership.`,
  },

  {
    id: "lunch",
    title: "Lunch",
    singer: "Billie Eilish",
    image: "assets/billie.png",
    audio: "assets/audio/lunch.mp3",
    lyrics: `Oh, mmm

        I could eat that girl for lunch
        Yeah, she dances on my tongue
        Tastes like she might be the one
        And I could never get enough
        I could buy her so much stuff
        It's a craving, not a crush, huh
        
        Call me when you're there
        Said: I bought you something rare
        And I left it under Claire
        So now she's coming up the stairs
        So I'm pulling up a chair
        And I'm putting up my hair
        
        Baby, I think you were made for me
        Somebody write down the recipe
        Been trying hard not to overeat
        You're just so sweet
        
        I'll run a shower for you like you want
        Clothes on the counter for you to try 'em on
        If I'm allowed, I'll help you take 'em off
        Huh
        
        I could eat that girl for lunch
        Yeah, she dances on my tongue
        Tastes like she might be the one
        And I could never get enough
        I could buy her so much stuff
        It's a craving, not a crush, huh
        
        I just wanna get her off, oh
        Oh, oh, oh, oh
        Oh, oh, ah-ah-ah-ah
        Oh-ah-huh
        
        She's taking pictures in the mirror
        Oh my God, her skin's so clear
        Tell her: Bring that over here
        You need a seat? I'll volunteer
        Now she's smiling ear to ear
        She's the headlights, I'm the deer
        
        I've said it all before, but I'll say it again
        I'm interested in more than just being your friend
        I don't wanna break it, just want it to bend
        Do you know how to bend?
        
        I could eat that girl for lunch
        She dances on my tongue
        I know it's just a hunch
        But she might be the one
        
        I could
        Eat that girl for lunch
        Yeah, she
        Tastes like she might be the one
        
        I could, I could
        Eat that girl for lunch
        Yeah, she, yeah, she
        Tastes like she might be the one`,

    descImg: "assets/billie.png",
    songDesc: `"Lunch" is a song by American singer-songwriter Billie Eilish and the lead single from her third studio album, Hit Me Hard and Soft (2024). It was released on May 17, 2024. The song features a heavy bassline and lyrics that detail Eilish's same-gender sexual attraction, following her public confirmation that she liked both men and women. In the lyrics, which she wrote after realizing that she wanted to try cunnilingus, she describes that desire (and her general sexual appetite), saying she "could eat that girl for lunch".`,
  },

  {
    id: "iwantitthatway",
    title: "I Want It That Way",
    singer: "Backstreet Boys",
    image: "assets/backstreetboys.png",
    audio: "assets/audio/iwantitthatway.mp3",
    lyrics: `You are my fire
        The one desire
        Believe when I say
        I want it that way
        
        But we are two worlds apart
        Can't reach to your heart
        When you say
        That I want it that way
        
        Tell me why
        Ain't nothing but a heartache
        Tell me why
        Ain't nothing but a mistake
        Tell me why
        I never wanna hear you say
        I want it that way
        
        Am I your fire
        Your one desire
        Yes I know it's too late
        But I want it that way
        
        Tell me why
        Ain't nothing but a heartache
        Tell me why
        Ain't nothing but a mistake
        Tell me why
        I never wanna hear you say
        I want it that way
        
        Now I can see that we're falling apart
        From the way that it used to be, yeah
        No matter the distance
        I want you to know
        That deep down inside of me
        
        You are my fire
        The one desire
        You are
        You are, you are, you are
        
        Don't wanna hear you say
        Ain't nothing but a heartache
        Ain't nothing but a mistake (don't wanna hear you say)
        I never wanna hear you say (oh, yeah)
        I want it that way
        
        Tell me why
        Ain't nothing but a heartache
        Tell me why
        Ain't nothing but a mistake
        Tell me why
        I never wanna hear you say (don't wanna hear you say)
        I want it that way
        
        Tell me why
        Ain't nothing but a heartache
        Ain't nothing but a mistake
        Tell me why
        I never wanna hear you say (never wanna hear you say)
        I want it that way
        
        'Cause I want it that way`,

    descImg: "assets/backstreetboys.png",
    songDesc: `“I Want It That Way” is about a strained relationship. The lyrical interpretation of this song, however, is notoriously muddled. They don’t necessarily make sense—and this is the subject of much the online discussion about this song. The lyrics were written by Max Martin and Andreas Carlsson, veteran Swedish hitmakers that began their careers at Cheiron Studios, which was largely responsible for the sound of pop in the ’90s. Carlsson talked to HitQuarters about writing this song:

        ‘I Want It That Way’ was a play with words. When Max came up with the original idea for the song, it already had the line ‘you are my fire, the one desire.’ We tried a million different variations on the second verse, and finally we had to go back to what was sounding so great, ‘you are my fire, the one desire.’ And then we changed it to ‘am I your fire, your one desire,’ which made absolutely no sense in combination with the chorus – but everybody loved it!
        
        The song’s guitar riff was inspired by Metallica. There was an alternate version of the song recorded with more coherent lyrics, but the band preferred the original version of the song. Backstreet Boy Kevin Richardson said that Martin’s English language skills were worse then, which is why the song’s lyrics don’t make a ton of sense. He told LA Weekly:
        
        Ultimately the song really doesn’t really make much sense.
        
        The video for this song, which was parodied by Blink-182, won a VMA for “Viewer’s Choice.”
        
        It was nominated for 3 Grammys in 2000: “Song of the Year,” “Record of the Year,” and “Best Pop Performance by a Duo or Group with Vocals.”
        
        On August 19, 2011, China’s Ministry of Culture released a list of 100 songs, including this song, that were required to be removed from the Internet as they had been released without being subjected to a mandatory screening process conducted by Ministry officials.`,
  },

  {
    id: "sweetchild",
    title: "Sweet Child O' Mine",
    singer: "Guns N’s Roses",
    image: "assets/GNR.png",
    audio: "assets/audio/sweetchild.mp3",
    lyrics: `She's got a smile that it seems to me
        Reminds me of childhood memories
        Where everything was as fresh as the bright blue sky (Sky)
        Now and then when I see her face
        She takes me away to that special place
        And if I stared too long I'd probably break down and cry
        
        Whoa-oh-oh! Sweet child o' mine
        Whoa, oh-oh-oh! Sweet love of mine
        
        She's got eyes of the bluest skies
        As if they thought of rain
        I hate to look into those eyes and see an ounce of pain
        Her hair reminds me of a warm, safe place
        Where as a child I'd hide
        And pray for the thunder and the rain to quietly pass me by
        
        Whoa-oh-oh! Sweet child o' mine
        Ooh, oh-oh-oh! Sweet love of mine
        
        Oh yeah! Whoa-oh-oh-oh! Sweet child o' mine
        Ooh-oh, oh, oh! Sweet love of mine
        Whoa, oh-oh-oh! Sweet child o' mine, ooh yeah
        Ooh! Sweet love of mine
        
        Where do we go?
        Where do we go now?
        Where do we go?
        Ooh, where do we go?
        Where do we go now?
        Oh, where do we go now?
        Where do we go? (Sweet child)
        Ooh, where do we go now?
        Ay, ay, ay, ay, ay, ay, ay, ay
        Where do we go now? Ah-ah-ah-ah-ah, wow
        Where do we go?
        Oh, where do we go now?
        Oh, where do we go?
        Where do we go now?
        Where do we go?
        Ooh, where do we go now?
        Now, now, now, now, now, now, now
        Sweet child, sweet child o' mine`,

    descImg: "assets/GNR.png",
    songDesc: `“Sweet Child O’ Mine” is the 9th track of Guns N’ Roses’ debut album Appetite for Destruction. The song became GNR’s most successful single, topping the Billboard Hot 100.

        The guitar solo was ranked as the 37th greatest solo of all-time by Guitar World. Amazingly, it was recorded in one take.
        
        The lyrics were written by frontman Axl Rose as a dedication to his then-girlfriend Erin Everly. Once he heard guitarist Slash noodling downstairs, Axl found the musical backing he needed.
        
        In 2015, the Australian website MAX TV revealed the song’s striking similarity to “Unpublished Critics,” a song released in 1981 by the band Australian Crawl. Duff McKagan, bass player for Guns N' Roses during the recording of “Sweet Child O' Mine,” said the similarities were startling. Speaking to Radio.com in 2015:
        
        It is pretty stunning. But we didn’t steal it from them! I swear [puts his hand on his heart], I never heard that song until a couple of days ago."`,
  },

  {
    id: "dontlookback",
    title: "Don’t Look Back in Anger",
    singer: "Oasis",
    image: "assets/oasis.png",
    audio: "assets/audio/dontlookbackinanger.mp3",
    lyrics: `Slip inside the eye of your mind
        Don't you know you might find
        A better place to play?
        You said that you'd never been
        But all the things that you've seen
        Slowly fade away
        
        So I start a revolution from my bed
        'Cause you said the brains I had went to my head
        Step outside, summertime's in bloom
        Stand up beside the fireplace
        Take that look from off your face
        You ain't ever gonna burn my heart out
        
        And so, Sally can wait
        She knows it's too late as we're walking on by
        Her soul slides away
        But don't look back in anger, I heard you say
        
        Take me to the place where you go
        Where nobody knows if it's night or day
        Please don't put your life in the hands
        Of a rock 'n' roll band
        Who'll throw it all away
        
        I'm gonna start a revolution from my bed
        'Cause you said the brains I had went to my head
        Step outside, 'cause summertime's in bloom
        Stand up beside the fireplace
        Take that look from off your face
        'Cause you ain't ever gonna burn my heart out
        
        And so, Sally can wait
        She knows it's too late as she's walking on by
        My soul slides away
        But don't look back in anger, I heard you say
        
        So, Sally can wait
        She knows it's too late as we're walking on by
        Her soul slides away
        But don't look back in anger, I heard you say
        
        So, Sally can wait
        She knows it's too late as she's walking on by
        My soul slides away
        But don't look back in anger, don't look back in anger
        I heard you say
        At least not today`,

    descImg: "assets/oasis.png",
    songDesc: `“Don’t Look Back in Anger” was released as the fourth single off of (What’s The Story) Morning Glory?, February 19th 1996. In 2006, it was included in the “Best Of”-compilation Stop The Clocks and in 2010 it was included in the singles collection Time Flies… 1994-2009.

        Noel Gallagher also admits that he was under the influence of illegal substances when he wrote the song and to this day he claims he does not know what the lyrics mean.
        
        In late May 2017, the song became a symbol for the Manchester’s spirit and resistance following the terrorist attacks during an Ariana Grande concert, when a crowd of Mancunians started singing it, at the end of a minute of silence to honour the victims of the attack.`,
  },

  {
    id: "rapgod",
    title: "Rap God",
    singer: "",
    image: "assets/eminem.png",
    audio: "assets/audio/rapgod.mp3",
    lyrics: `"Look, I was gonna go easy on you not to hurt your feelings"
        "But I'm only going to get this one chance" (six minutes-, six minutes-)
        "Something's wrong, I can feel it" (six minutes, Slim Shady, you're on!)
        "Just a feeling I've got, like something's about to happen, but I don't know what
        If that means what I think it means, we're in trouble, big trouble
        And if he is as bananas as you say, I'm not taking any chances"
        "You are just what the doc ordered"
        I'm beginnin' to feel like a Rap God, Rap God
        All my people from the front to the back nod, back nod
        Now, who thinks their arms are long enough to slap box, slap box?
        They said I rap like a robot, so call me Rap-bot
        But for me to rap like a computer, it must be in my genes
        I got a laptop in my back pocket
        My pen'll go off when I half-cock it
        Got a fat knot from that rap profit
        Made a livin' and a killin' off it
        Ever since Bill Clinton was still in office
        With Monica Lewinsky feelin' on his nutsack
        I'm an MC still as honest
        But as rude and as indecent as all hell
        Syllables, skill-a-holic (kill 'em all with)
        This flippity dippity-hippity hip-hop
        You don't really wanna get into a pissin' match
        With this rappity brat, packin' a MAC in the back of the Ac'
        Backpack rap crap, yap-yap, yackety-yack
        And at the exact same time, I attempt these lyrical acrobat stunts while I'm practicin' that
        I'll still be able to break a motherfuckin' table
        Over the back of a couple of faggots and crack it in half
        Only realized it was ironic, I was signed to Aftermath after the fact
        How could I not blow? All I do is drop F-bombs, feel my wrath of attack
        Rappers are havin' a rough time period, here's a maxi pad
        It's actually disastrously bad for the wack
        While I'm masterfully constructing this masterpièce
        'Cause I'm beginnin' to feel like a Rap God, Rap God
        All my people from the front to the back nod, back nod
        Now, who thinks their arms are long enough to slap box, slap box?
        Let me show you maintainin' this shit ain't that hard, that hard
        Everybody want the key and the secret to rap immortality like Ι have got
        Well, to be truthful the blueprint's
        Simply rage and youthful exuberance
        Everybody loves to root for a nuisance
        Hit the Earth like an asteroid
        Did nothing but shoot for the Moon since (pew!)
        MCs get taken to school with this music
        'Cause I use it as a vehicle to, "Bus the rhyme"
        Now I lead a new school full of students
        Me? I'm a product of Rakim
        Lakim Shabazz, 2Pac, N.W.A, Cube, hey Doc, Ren
        Yella, Eazy, thank you, they got Slim
        Inspired enough to one day grow up, blow up and be in a position
        To meet Run-D.M.C., induct them
        Into the motherfuckin' Rock and Roll Hall of Fame
        Even though I'll walk in the church and burst in a ball of flames
        Only Hall of Fame I'll be inducted in is the alcohol of fame on the wall of (shame)
        You - think it's all a game, 'til I walk a flock of flames
        Off a plank and, tell me what in the f- are you thinkin'?
        Little ga-lookin' boy
        So ga-, I can barely say it with a straight face, lookin' boy (ha-ha!)
        You're witnessin' a mass-occur
        Like you're watching a church gathering take place, lookin' boy
        "Oy vey, that boy's ga-!" That's all they say, lookin' boy
        You get a thumbs up, pat on the back
        And a "way to go" from your label every day, lookin' boy
        Hey, lookin' boy! What you say, lookin' boy?
        I get a "Hell, yeah" from Dre, lookin' boy
        I'ma work for everything I have, never asked nobody for s-
        Get outta my face, lookin' boy!
        Basically, boy, you're never gonna be capable
        Of keepin' up with the same pace, lookin' boy, 'cause-
        I'm beginnin' to feel like a Rap God, Rap God
        All my people from the front to the back nod, back nod
        The way I'm racin' around the track, call me NASCAR, NASCAR
        Dale Earnhardt of the trailer park, the White Trash God
        Kneel before General Zod, this planet's Krypton-, no, Asgard, Asgard
        So you'll be Thor and I'll be Odin
        You rodent, I'm omnipotent
        Let off, then I'm reloadin'
        Immediately with these bombs I'm totin'
        And I should not be woken
        I'm the walkin' dead, but I'm just a talkin' head, a zombie floatin'
        But I got your mom deep thro-
        I'm out my Ramen Noodle
        We have nothin' in common, poodle
        I'm a Doberman, pinch yourself in the arm and pay homage, pupil
        It's me, my honesty's brutal
        But it's honestly futile if I don't utilize what I do though
        For good at least once in a while
        So I wanna make sure somewhere in this chicken scratch I scribble and doodle enough rhymes to
        Maybe try to help get some people through tough times
        But I gotta keep a few punchlines
        Just in case 'cause even you unsigned
        Rappers are hungry lookin' at me like it's lunchtime
        I know there was a time where once I
        Was king of the underground
        But I still rap like I'm on my Pharoahe Monch grind
        So I crunch rhymes, but sometimes when you combine
        Appeal with the skin color of mine
        You get too big and here they come tryin'
        To censor you like that one line
        I said on "I'm Back" from The Mathers LP 1 when I
        Tried to say I'll take seven kids from Columbine
        Put 'em all in a line, add an AK-47, a revolver and a .9
        See if I get away with it now that I ain't as big as I was, but I'm
        Morphin' into an immortal, comin' through the portal
        You're stuck in a time warp from 2004 though
        And I don't know what the f- that you rhyme for
        You're pointless as Rapunzel with fuckin' cornrows
        You write normal? F- being normal!
        And I just bought a new raygun from the future
        Just to come and shoot ya, like when Fabolous made Ray J mad
        'Cause Fab said he looked like a fag at Mayweather's pad
        Singin' to a man while he played piano
        Man, oh man, that was a 24-7 special on the cable channel
        So Ray J went straight to the radio station
        The very next day, "Hey Fab, I'ma kill you!"
        Lyrics comin' at you at supersonic speed (J.J. Fad)
        Uh, summa-lumma, dooma-lumma, you assumin' I'm a human
        What I gotta do to get it through to you I'm superhuman?
        Innovative and I'm made of rubber so that anything
        You say is ricochetin' off of me, and it'll glue to you and
        I'm devastating, more than ever demonstrating
        How to give a motherfuckin' audience a feeling like it's levitating
        Never fading, and I know the haters are forever waiting
        For the day that they can say I fell off, they'll be celebrating
        'Cause I know the way to get 'em motivated
        I make elevating music, you make elevator music
        "Oh, he's too mainstream", well, that's what they do when they get jealous, they confuse it
        "It's not hip-hop, it's pop, " 'cause I found a hella way to fuse it
        With rock, shock rap with Doc
        Throw on "Lose Yourself" and make 'em lose it
        I don't know how to make songs like that
        I don't know what words to use
        Let me know when it occurs to you
        While I'm rippin' any one of these verses that versus you
        It's curtains, I'm inadvertently hurtin' you
        How many verses I gotta murder to
        Prove that if you were half as nice, your songs, you could sacrifice virgins too?
        Ugh, school flunky, pill junkie
        But look at the accolades these skills brung me
        Full of myself, but still hungry
        I bully myself 'cause I make me do what I put my mind to
        And I'm a million leagues above you
        Ill when I speak in tongues, but it's still tongue-in-cheek, fu- you
        I'm drunk, so, Satan, take the fu- wheel
        I'ma sleep in the front seat
        Bumpin' Heavy D and the Boyz, still "Chunky but Funky"
        But in my head, there's something I can feel tugging and struggling
        Angels fight with devils and here's what they want from me
        They're askin' me to eliminate some of the women hate
        But if you take into consideration the bitter hatred
        I have, then you may be a little patient
        And more sympathetic to the situation, understand the discrimination
        But f- it, life's handin' you lemons? Make lemonade then!
        But if I can't batter the women
        How the f- am I supposed to bake them a cake then?
        Don't mistake him for (Satan), it's a fatal mistake
        If you think I need to be overseas and take a vacation
        To trip a broad, and make her fall on her face and
        Don't be a retard, be a king? Think not
        Why be a king when you can be a god?`,

    descImg: "assets/eminem.png",
    songDesc: `“Rap God” is Eminem’s braggadocious ode to himself and his career. Over its six-minute run-time, he references comic books, throws back to his old songs, and raps crazily fast.

        In a Q&A with Rolling Stone, Em was asked whether he felt like a Rap God or an underdog, to which he responded:
        
        I think everything switches back and forth from hour to hour, day by day with me. That whole ‘Rap God’ record pretty much from top to bottom is tongue in cheek. So I mean, do I want to feel like that? Maybe sometimes. Again, it goes back to everybody who competitively raps and does this for just purely for the sport of it wants to be the best. Again, that’s why Kendrick’s verse worked so well because he only said what every rapper’s already thinking, If you don’t want to be the best, then why are you rapping?
        
        This song landed Eminem a spot in The Guinness Book of World Records for the most words in a hit single:
        
        The single ‘Rap God’ from Eminem packed a mouth-filling 1,560 words into its 6 min 4 sec runtime.
        
        However, in 2015, Harry Shotta broke Eminem’s world record of most words in a track. Eminem’s “Rap God” has 1560 words, while Harry Shotta’s “Animal” has 1771.`,
  },

  {
    id: "sickomode",
    title: "Sicko Mode",
    singer: "Travis Scott",
    image: "assets/travis.png",
    audio: "assets/audio/sickomode.mp3",
    lyrics: `Astro, yeah
        Sun is down, freezin' cold
        That's how we already know winter's here
        My dawg would prolly do it for a Louis belt
        That's just all he know, he don't know nothin' else
        I tried to show 'em, yeah
        I tried to show 'em, yeah, yeah
        Yeah, yeah, yeah
        Gone on you with the pick and roll
        Young LaFlame, he in sicko mode
        Woo, made this here with all the ice on in the booth
        At the gate outside, when they pull up, they get me loose
        Yeah, Jump Out boys, that's Nike boys, hoppin' out coupes
        This shit way too big, when we pull up give me the loot
        (Gimme the loot)
        Was off the Remy, had a Papoose
        Had to hit my old town to duck the news
        Two-four hour lockdown, we made no moves
        Now it's 4AM and I'm back up poppin' with the crew
        I just landed in, Chase B mixes pop like Jamba Juice
        Different colored chains, think my jeweler really sellin' fruits
        And they chokin', man, know the crackers wish it was a noose
        Some-some-some, someone said
        To win the retreat, we all in too deep
        P-p-playin' for keeps, don't play us for weak (someone said)
        To win the retreat, we all in too deep
        P-p-playin' for keeps, don't play us for weak (yeah)
        This shit way too formal, y'all know I don't follow suit
        Stacey Dash, most of these girls ain't got a clue
        All of these hoes I made off records I produced
        I might take all my exes and put 'em all in a group
        Hit my esés, I need the bootch
        'Bout to turn this function to Bonnaroo
        Told her, "Hop in, you comin' too"
        In the 305, bitches treat me like I'm Uncle Luke
        (Don't stop, pop that pussy)
        Had to slop the top off, it's just a roof (uh)
        She said, "Where we goin'?" I said, "The moon"
        We ain't even make it to the room
        She thought it was the ocean, it's just the pool
        Now I got her open, it's just the Goose
        Who put this shit together? I'm the glue (someone said)
        Shorty FaceTimed me out the blue
        Someone said (playin'-playin' for keeps)
        Someone said, motherfuck what someone said
        (Don't play us for weak)
        Yeah
        Astro
        Yeah, yeah
        Tay Keith, fuck these niggas up (ayy, ayy)
        She's in love with who I am
        Back in high school, I used to bus it to the dance (yeah)
        Now I hit the FBO with duffles in my hands
        I did half a Xan, thirteen hours 'til I land
        Had me out like a light, ayy, yeah
        Like a light, ayy, yeah
        Like a light, ayy
        Slept through the flight, ayy
        Knocked for the night, ayy, 767, man
        This shit got double bedroom, man
        I still got scores to settle, man
        I crept down the block (down the block), made a right (yeah, right)
        Cut the lights (yeah, what?), paid the price (yeah)
        Niggas think it's sweet (nah, nah), it's on sight (yeah, what?)
        Nothin' nice (yeah), baguettes in my ice (aww, man)
        Jesus Christ (yeah), checks over stripes (yeah)
        That's what I like (yeah), that's what we like (yeah)
        Lost my respect, you not a threat
        When I shoot my shot, that shit wetty like I'm Sheck (bitch)
        See the shots that I took (ayy), wet like I'm Book (ayy)
        Wet like I'm Lizzie, I be spinnin' Valley
        Circle blocks 'til I'm dizzy (yeah, what?)
        Like where is he? (Yeah, what?)
        No one seen him (yeah, yeah)
        I'm tryna clean 'em (yeah)
        She's in love with who I am
        Back in high school, I used to bus it to the dance
        Now I hit the FBO with duffles in my hand (woo)
        I did half a Xan, thirteen hours 'til I land
        Had me out like a light, like a light
        Like a light, like a light
        Like a light (yeah), like a light
        Like a light
        Yeah, passed the dawgs a celly
        Sendin' texts, ain't sendin' kites, yeah
        He said, "Keep that on lock"
        I said, "You know this shit, it's stife", yeah
        It's absolute (yeah), I'm back reboot (it's lit)
        LaFerrari to Jamba Juice, yeah (skrrt, skrrt)
        We back on the road, they jumpin' off, no parachute, yeah
        Shawty in the back
        She said she workin' on her glutes, yeah (oh my God)
        Ain't by the book, yeah
        This how it look, yeah
        'Bout a check, yeah
        Just check the foots, yeah
        Pass this to my daughter, I'ma show her what it took (yeah)
        Baby mama cover Forbes, got these other bitches shook, yeah
        Ye-ah`,

    descImg: "assets/travis.png",
    songDesc: `“SICKO MODE” refers to Travis and Drake’s work ethic, showing they’re a cut above the competition by going into “sicko” or “beast” mode.

        “Sicko,” or “6icko” (the 6 referring to Drake’s hometown Toronto), is a term derived from Drake’s vernacular. It refers to his friends, brought to the limelight by Golden State Warriors All-Star Kevin Durant, when he tweeted his reaction to Drake’s 2015 diss track, “Charged Up.”
        
        The track has been teased as far back as 2017, when Drake teamed up with Louis Vuitton to release his track “Signs,” and Travis Scott replied to an Instagram post, saying:
        
        Dawg prolly do it for a Louis belt.`,
  },

  {
    id: "godsplan",
    title: "God's Plan",
    singer: "Drake",
    image: "assets/drake.png",
    audio: "assets/audio/godsplan.mp3",
    lyrics: `And, they wishin' and wishin' and wishin' and wishin'
        They wishin' on me, yeah
        I been movin' calm, don't start no trouble with me
        Tryna keep it peaceful is a struggle for me
        Don't pull up at 6 AM to cuddle with me
        You know how I like it when you lovin' on me
        I don't wanna die for them to miss me
        Yes, I see the things that they wishin' on me
        Hope I got some brothers that outlive me
        They gon' tell the story, shit was different with me
        God's plan, God's plan
        I hold back, sometimes I won't, yeah
        I feel good, sometimes I don't, ayy, don't
        I finessed down Weston Road, ayy, 'nessed
        Might go down a G-O-D, yeah, wait
        I go hard on Southside G, yeah, Way
        I make sure that north side eat
        And still
        Bad things
        It's a lot of bad things
        That they wishin' and wishin' and wishin' and wishin'
        They wishin' on me
        Bad things
        It's a lot of bad things
        That they wishin' and wishin' and wishin' and wishin'
        They wishin' on me
        Yeah, ayy, ayy (ayy)
        She say, "Do you love me?" I tell her, "Only partly
        I only love my bed and my momma, I'm sorry"
        Fifty Dub, I even got it tatted on me
        81, they'll bring the crashers to the party
        And you know me
        Turn the O2 into the O3, dog
        Without 40, Oli', there'd be no me
        'Magine if I never met the broskis
        God's plan, God's plan
        I can't do this on my own, ayy, no, ayy
        Someone watchin' this shit close, yep, close
        I've been me since Scarlett Road, ayy, road, ayy
        Might go down as G-O-D, yeah, wait
        I go hard on Southside G, ayy, Way
        I make sure that north side eat, yuh
        And still
        Bad things
        It's a lot of bad things
        That they wishin' and wishin' and wishin' and wishin'
        They wishin' on me
        Yeah, yeah
        Bad things
        It's a lot of bad things
        That they wishin' and wishin' and wishin' and wishin'
        They wishin' on me
        Yeah`,

    descImg: "assets/drake.png",
    songDesc: `“God’s Plan” is a feel-good track that discusses Drake’s future. Being who he is in the industry, he knows that people want him to fail; however, God won’t let him do that.

        Another key subject of the song is the separation Drake feels that he needs to have from those outside of his inner circle. Anyone who tries to work their way into his life must have an ulterior motive to benefit themselves.
        
        The last key subject of this song is the fact that Drake is giving back to the life he had once, honoring the people and the environment he also once was in.
        
        The official music video shared a different sentiment though, as Drake took the budget for the video, a whopping $996,631.90, and gave it away to families, schools, charities, and more. It was directed by Karena Evans, who also hails from Toronto, and is a protégé of Director X.
        
        Director X has had a hand in a number of Drake music videos in the past, including “Hotline Bling” and “Started From The Bottom.”`,
  },

  {
    id: "thankunext",
    title: "thank u, next",
    singer: "Ariana Grande",
    image: "assets/ariana.png",
    audio: "assets/audio/thankunext.mp3",
    lyrics: `Thought I'd end up with Sean
        But he wasn't a match
        Wrote some songs about Ricky
        Now I listen and laugh
        Even almost got married
        And for Pete, I'm so thankful
        Wish I could say "thank you" to Malcolm
        'Cause he was an angel
        One taught me love
        One taught me patience
        And one taught me pain
        Now, I'm so amazing
        Say I've loved and I've lost
        But that's not what I see
        So, look what I got
        Look at what you taught me
        And for that, I say
        Thank you, next (next)
        Thank you, next (next)
        Thank you, next
        I'm so grateful for my ex
        Thank you, next (next)
        Thank you, next (next)
        Thank you, next (next)
        I'm so
        Spend more time with my friends
        I ain't worried 'bout nothin'
        Plus, I met someone else
        We're havin' better discussions
        I know they say I move on too fast
        But this one gon' last
        'Cause her name is Ari
        And I'm so good with that (so good with that)
        She taught me love (love)
        She taught me patience (patience)
        She handles pain (pain)
        That amazing (yeah, she's amazing)
        I've loved and I've lost (yeah, yeah)
        But that's not what I see (yeah, yeah)
        'Cause look what I've found (yeah, yeah)
        Ain't no need for searching
        And for that, I say
        Thank you, next (thank you, next)
        Thank you, next (thank you, next)
        Thank you, next (thank you)
        I'm so grateful for my ex
        Thank you, next (thank you, next)
        Thank you, next (said thank you, next)
        Thank you, next (next)
        I'm so grateful for my ex
        Thank you, next
        Thank you, next
        Thank you, next
        I'm so
        One day I'll walk down the aisle
        Holding hands with my mama
        I'll be thanking my dad
        'Cause she grew from the drama
        Only wanna do it once, real bad
        Gon' make that last
        God forbid something happens
        Least this song is a smash (song is a smash)
        I've got so much love (love)
        Got so much patience (patience)
        I've learned from the pain (pain)
        I turned out amazing (turned out amazing)
        I've loved and I've lost (yeah, yeah)
        But that's not what I see (yeah, yeah)
        'Cause look what I've found (yeah, yeah)
        Ain't no need for searching
        And for that, I'll say
        Thank you, next (thank you, next)
        Thank you, next (thank you, next)
        Thank you, next
        I'm so grateful for my ex
        Thank you, next (thank you, next)
        Thank you, next (said thank you, next)
        Thank you, next (next)
        I'm so grateful for my ex
        Thank you, next
        Thank you, next
        Thank you, next
        Yeah, yee
        Thank you, next
        Thank you, next
        Thank you, next
        Yeah, yee`,

    descImg: "assets/ariana.png",
    songDesc: `On the lead single and titular track to her fifth studio album, thank u, next, Ariana Grande discusses themes of self-love, growth, and empowerment after a breakup. She also references her most public romantic relationships over the years and does not shy away from name-dropping in the process.

        The song was released on November 3, 2018, minutes before an episode of Saturday Night Live aired. In a promotional clip, cast member and Ariana’s ex-fiancé, Pete Davidson, made a joke about the two’s failed engagement. Once she was made aware of the clip, she expressed her disgust in a since deleted tweet, writing:
        
        for somebody who claims to hate relevancy u sure love clinging to it huh
        
        She then followed her post with another, tweeting the phrase that would become her new mantra in 2018:
        
        thank u, next
        
        “thank u, next” debuted at #1 on the Billboard Hot 100, becoming Ariana’s eleventh top-ten entry and her highest charting single to date, surpassing her Iggy Azalea assisted single “Problem,” which peaked at #2 in 2014. Additionally, it was the first song by a lead female artist to debut atop the US charts since Adele’s “Hello” in 2015.
        
        The music video for “thank u, next” was released on November 30, 2018, and is directed by frequent collaborator Hannah Lux Davis, who has previously worked with Ariana on videos for “breathin,” “Side to Side,” and more. The video interpolates iconic early-2000s movies Mean Girls, Bring It On, Legally Blonde, and 13 Going on 30, and features cameo appearances from celebrities including Kris Jenner, Troye Sivan, as well as Ariana’s former Victorious co-stars Daniella Monet, Elizabeth Gillies and Matt Bennett, among others. The music video became a huge success, accumulating more than 55.4 million views in its first 24 hours, becoming the biggest-ever global debut for a music video on YouTube. It would go on to break another YouTube record for the fastest video to reach 100 million views.`,
  },

  {
    id: "starboy",
    title: "Starboy",
    singer: "The Weeknd",
    image: "assets/weeknd.png",
    audio: "assets/audio/starboy.mp3",
    lyrics: `I'm tryna put you in the worst mood, ah
        P1 cleaner than your church shoes, ah
        Milli point two just to hurt you, ah
        All red lamb just to tease you, ah
        None of these toys on lease too, ah
        Made your whole year in a week too, yeah
        Main bitch out of your league too, ah
        Side bitch out of your league too, ah
        
        House so empty, need a centerpiece
        Twenty racks, a table cut from ebony
        Cut that ivory into skinny pieces
        Then she clean it with her face, man
        I love my baby
        You talking money, need a hearing aid
        You talking 'bout me, I don't see the shade
        Switch up my style, I take any lane
        I switch up my cup, I kill any pain
        
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        Look what you've done!
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        I'm a motherfuckin' Starboy
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        Look what you've done!
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        I'm a motherfuckin' Starboy
        
        Every day a nigga try to test me, ah
        Every day a nigga try to end me, ah
        Pull off in that roadster SV, ah
        Pockets over weight getting hefty, ah
        Coming for the king, that's a far cry
        I come alive in the fall time I
        No competition, I don't really listen
        I'm in the blue Mulsanne bumping New Edition
        
        House so empty, need a centerpiece
        Twenty racks, a table cut from ebony
        Cut that ivory into skinny pieces
        Then she clean it with her face, man
        I love my baby
        You talking money, need a hearing aid
        You talking 'bout me, I don't see the shade
        Switch up my style, I take any lane
        I switch up my cup, I kill any pain
        
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        Look what you've done!
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        I'm a motherfuckin' Starboy
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        Look what you've done!
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        I'm a motherfuckin' Starboy
        
        Let a nigga brag Pitt
        Legend of the fall took the year like a bandit
        Bought mama a crib and a brand new wagon
        Now she hit the grocery shop looking lavish
        Star Trek roof in that Wraith of Khan
        Girls get loose when they hear this song
        Hundred on the dash get me close to God
        We don't pray for love, we just pray for cars
        
        House so empty, need a centerpiece
        Twenty racks, a table cut from ebony
        Cut that ivory into skinny pieces
        Then she clean it with her face
        Man, I love my baby
        You talking money, need a hearing aid
        You talking 'bout me, I don't see the shade
        Switch up my style, I take any lane
        I switch up my cup, I kill any pain
        
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        Look what you've done!
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        I'm a motherfuckin' Starboy
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        Look what you've done!
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        I'm a motherfuckin' Starboy
        
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        Look what you've done!
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        I'm a motherfuckin' Starboy
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        Look what you've done!
        Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha
        I'm a motherfuckin' Starboy`,

    descImg: "assets/weeknd.png",
    songDesc: `“Starboy” is The Weeknd’s realization of his mega-stardom. Transforming from mysterious Canadian act to Billboard mainstay. Abel has come a long way, but with negative consequences in his journey to the top, he has developed mixed feelings towards fame.

        “Starboy” potentially marks a new era for The Weeknd. On the release date of the song, Abel posted an Instagram picture with the caption “r.i.p ‘@abelxo,’” marking the turn of his character and sound.
        
        The song features production from French electronic duo Daft Punk, marking the first collaboration between The Weeknd and Daft Punk, and the latter’s first single since “Give Life Back To Music” was released in early-2014. A month before release Abel and Daft Punk had spent time together in the studio, and it was obviously so fruitful he decided to make one of their collaborations the album’s lead single.
        
        “Starboy” is the title track and lead single from The Weeknd’s third studio album, released on November 25th, 2016.`,
  },

  {
    id: "toogood",
    title: "Too Good at Goodbyes",
    singer: "Sam Smith",
    image: "assets/samsmith.png",
    audio: "assets/audio/toogoodatgoodbyes.mp3",
    lyrics: `You must think that I'm stupid
        You must think that I'm a fool
        You must think that I'm new to this
        But I have seen this all before
        I'm never gonna let you close to me
        Even though you mean the most to me
        'Cause every time I open up, it hurts
        So, I'm never gonna get too close to you
        Even when I mean the most to you
        In case you go and leave me in the dirt
        But every time you hurt me, the less that I cry
        And every time you leave me, the quicker these tears dry
        And every time you walk out, the less I love you
        Baby, we don't stand a chance, it's sad, but it's true
        I'm way too good at goodbyes
        (I'm way too good at goodbyes)
        I'm way too good at goodbyes
        (I'm way too good at goodbyes)
        I know you're thinking I'm heartless
        I know you're thinking I'm cold
        I'm just protecting my innocence
        I'm just protecting my soul
        I'm never gonna let you close to me
        Even though you mean the most to me
        'Cause every time I open up, it hurts
        So, I'm never gonna get too close to you
        Even when I mean the most to you
        In case you go and leave me in the dirt
        But every time you hurt me, the less that I cry
        And every time you leave me, the quicker these tears dry
        And every time you walk out, the less I love you
        Baby, we don't stand a chance, it's sad, but it's true
        I'm way too good at goodbyes
        (I'm way too good at goodbyes)
        I'm way too good at goodbyes
        (I'm way too good at goodbyes)
        No way that you'll see me cry
        (No way that you'll see me cry)
        I'm way too good at goodbyes
        (I'm way too good at goodbyes) no
        No, no, no, no, no (I'm way too good at goodbyes)
        No, no, no, no
        No, no, no (I'm way too good at goodbyes)
        (No way that you'll see me cry)
        Ah-ah-ah (I'm way too good at goodbyes)
        'Cause every time you hurt me, the less that I cry
        And every time you leave me, the quicker these tears dry
        And every time you walk out, the less I love you
        Baby, we don't stand a chance, it's sad, but it's true
        I'm way too good at goodbyes`,

    descImg: "assets/samsmith.png",
    songDesc: `“Too Good at Goodbyes” tells of a turbulent personal relationship, and is Sam Smith’s first solo release since their 2015 James Bond theme “Writing’s on the Wall.” The song is the lead single from their sophomore album, The Thrill of It All.

        In a Beats 1 interview, Sam explained that only four songs on the album are about them, and “Too Good at Goodbyes” is one of them. They told Zane Lowe how the song was inspired by a real relationship:
        
        [The song is] about a relationship I was in and it’s basically about getting good at getting dumped. […] I’m still very, very single. I think I’m even more single than I was when I released In the Lonely Hour.
        
        They also said,
        
        At the time I was trying to convince myself I was tough, to protect myself. I was gearing up for what I knew would happen. I’m really not like that at all.
        
        In an interview with Nick Grimshaw on BBC Radio 1 on the morning the song dropped, Nick introduced Sam by saying that “the vibes around Sam have definitely changed,” and Sam agreed. They explained that the album, due in November, is a tribute to the family and friends who supported them over the years, focusing on ‘their lives — their ups and downs —, rather than Sam’s own.`,
  },

  {
    id: "believer",
    title: "Believer",
    singer: "Imagine Dragons",
    image: "assets/imaginedragons.png",
    audio: "assets/audio/believer.mp3",
    lyrics: `First things first
        I'ma say all the words inside my head
        I'm fired up and tired of the way that things have been, oh-ooh
        The way that things have been, oh-ooh
        Second thing second
        Don't you tell me what you think that I could be
        I'm the one at the sail, I'm the master of my sea, oh-ooh
        The master of my sea, oh-ooh
        I was broken from a young age
        Taking my sulking to the masses
        Writing my poems for the few
        That look at me, took to me, shook to me, feeling me
        Singing from heartache from the pain
        Taking my message from the veins
        Speaking my lesson from the brain
        Seeing the beauty through the...
        Pain!
        You made me a, you made me a believer, believer
        Pain!
        You break me down and build me up, believer, believer
        Pain!
        Oh, let the bullets fly, oh, let them rain
        My life, my love, my drive, it came from...
        Pain!
        You made me a, you made me a believer, believer
        First things first
        Can you imagine what's about to happen?
        It's Weezy the Dragon, I link with the Dragons
        And we gon' get ratchet, no need for imaginin'
        This is what's happenin'
        Second thing second, I reckon immaculate
        Sound about accurate
        I know that strength, it don't come, don't come without strategy
        I know the sweet, it don't come without cavities
        I know the passages come with some traffic
        I start with from the basement, end up in the attic
        And third thing third
        Whoever call me out, they simply can't count
        Let's get mathematic, I'm up in this, huh
        Is you a believer?
        I get a unicorn out of a zebra
        I wear my uniform like a tuxedo
        This dragon don't hold his breath, don't need no breather
        Love you Ms. Cita, the son of a leader
        I know the bloomin' don't come without rain
        I know the losin' don't come without shame
        I know the beauty don't come without hurt
        Hol' up, hol' up, last thing last
        I know that Tunechi don't come without Wayne
        I know that losin' don't come without game
        I know that glory don't come without...
        Don't come without...
        Pain!
        You made me a, you made me a believer, believer
        Pain!
        You break me down and build me up, believer, believer
        Pain
        Oh, let the bullets fly, oh, let them rain
        My life, my love, my drive, it came from...
        Pain!
        You made me a, you made me a believer, believer
        Last things last
        By the grace of fire and flames
        You're the face of the future, the blood in my veins, oh-ooh
        The blood in my veins, oh-ooh
        But they never did, ever lived, ebbing and flowing
        Inhibited, limited 'til it broke open and rained down
        It rained down, like...
        Pain!
        You made me a, you made me a believer, believer
        Pain!
        You break me down and build me up, believer, believer
        Pain
        Oh, let the bullets fly, oh, let them rain
        My life, my love, my drive, it came from...
        Pain!
        You made me a, you made me a believer, believer`,

    descImg: "assets/imaginedragons.png",
    songDesc: `“Believer” thunders around a percussive backbeat and expressive vocals from Dan Reynolds to bring about a message of embracing pain, and using it as a tool for personal growth. It marks the end of Imagine Dragons' self-imposed hiatus that started in 2016. The song acts as the title for their documentary surrounding LGBT youth and the Mormon church.

        The song was released on the first of February as the lead single for their third studio album, Evolve, and was featured in a commercial for the Nintendo Switch that premiered on Super Bowl LI. The song was also featured in the first trailer for Kenneth Branagh’s Murder on the Orient Express remake.
        
        Nearly two years after its release, the band released a remix of the song alongside Lil Wayne during their 2019 National College Football Championship halftime performance.`,
  },

  {
    id: "hello",
    title: "Hello",
    singer: "Adele",
    image: "assets/adele.png",
    audio: "assets/audio/hello.mp3",
    lyrics: `Hello, it's me
        I was wondering if after all these years you'd like to meet
        To go over everything
        They say that time's supposed to heal ya, but I ain't done much healing
        Hello, can you hear me?
        I'm in California dreaming about who we used to be
        When we were younger and free
        I've forgotten how it felt before the world fell at our feet
        There's such a difference between us
        And a million miles
        Hello from the other side
        I must've called a thousand times
        To tell you I'm sorry for everything that I've done
        But when I call, you never seem to be home
        Hello from the outside
        At least I can say that I've tried
        To tell you I'm sorry for breaking your heart
        But it don't matter, it clearly doesn't tear you apart anymore
        Hello, how are you?
        It's so typical of me to talk about myself, I'm sorry
        I hope that you're well
        Did you ever make it out of that town where nothing ever happened?
        It's no secret that the both of us
        Are running out of time
        So hello from the other side (other side)
        I must've called a thousand times (thousand times)
        To tell you I'm sorry for everything that I've done
        But when I call, you never seem to be home
        Hello from the outside (outside)
        At least I can say that I've tried (I've tried)
        To tell you I'm sorry for breaking your heart
        But it don't matter, it clearly doesn't tear you apart anymore
        Ooh (lows, lows, lows, lows), anymore
        (Highs, highs, highs, highs)
        Ooh (lows, lows, lows, lows), anymore
        (Highs, highs, highs, highs)
        Ooh (lows, lows, lows, lows), anymore
        (Highs, highs, highs, highs)
        Anymore (lows, lows, lows, lows)
        Hello from the other side (other side)
        I must've called a thousand times (thousand times)
        To tell you I'm sorry for everything that I've done
        But when I call, you never seem to be home
        Hello from the outside (outside)
        At least I can say that I've tried (I've tried)
        To tell you I'm sorry for breaking your heart
        But it don't matter, it clearly doesn't tear you apart anymore`,

    descImg: "assets/adele.png",
    songDesc: `Almost five years after her groundbreaking 21, Adele examines the past and tries to right her wrongs on “Hello.” On the surface, the song appears to be about a break-up from long ago, but the song can also be interpreted as Adele’s attempt at reconciliation with her former self. In a tweet, Adele called 21 a “break-up record” and 25 a “make-up record.”

        Adele revealed the broad inspiration for the song:
        
        No, it’s not about anyone specifically. It’s about friends, ex-boyfriends, it’s about myself, it’s about my family. It’s also about my fans as well.
        
        A day before the release, Zane Lowe interviewed Adele about her future goals, touring, the album, and the “Hello” music video. Although “Hello” was released on October 23, 2015, a portion of the song was first featured during a commercial break on the UK’s X Factor on October 18, 2015.
        
        The accompanying music video broke the Vevo record for the most views in 24 hours with 27.7 million total. Taylor Swift previously held the record with her video for “Bad Blood”, which had 20.1 million views in a single day. “Hello” was directed by Xavier Dolan and was the first music video to be shot by IMAX cameras.
        
        In the US, “Hello” debuted at number 1 on the Hot 100, selling a whopping 1,112,000 downloads in its first week, almost doubling Flo Rida’s previous sales record (636,000 with “Right Round”.) The track significantly broke various streaming records after being replayed 61 million times in its first week.
        
        In an interview with i-D, Adele contextualizes “Hello”:
        
        The song is about hurting someone’s feelings but it’s also about trying to stay in touch with myself, which sometimes can be a little bit hard to do,“ she explains. "It’s about a yearning for the other side of me. When I’m away, I really, really miss my life at home. The way that I feel when I’m not in England, is…” (she pauses) “desperation. I can’t breathe anywhere else.” Why? “I dunno. I’m so attached to my whole life here. I get worked up that I’m missing out on things. So ‘Hello’ is about wanting to be at home and wanting to reach out to everyone I’ve ever hurt – including myself – and apologize for it.`,
  },

  {
    id: "allofme",
    title: "All of Me",
    singer: "John Legend",
    image: "assets/johnlegend.png",
    audio: "assets/audio/allofme.mp3",
    lyrics: `What would I do without your smart mouth?
        Drawing me in, and you kicking me out
        You've got my head spinning, no kidding, I can't pin you down
        What's going on in that beautiful mind?
        I'm on your magical mystery ride
        And I'm so dizzy, don't know what hit me, but I'll be alright
        My head's under water
        But I'm breathing fine
        You're crazy and I'm out of my mind
        'Cause all of me
        Loves all of you
        Love your curves and all your edges
        All your perfect imperfections
        Give your all to me
        I'll give my all to you
        You're my end and my beginning
        Even when I lose, I'm winning
        'Cause I give you all of me
        And you give me all of you, oh-oh
        How many times do I have to tell you?
        Even when you're crying, you're beautiful too
        The world is beating you down, I'm around through every mood
        You're my downfall, you're my muse
        My worst distraction, my rhythm and blues
        I can't stop singing, it's ringing in my head for you
        My head's under water
        But I'm breathing fine
        You're crazy and I'm out of my mind
        'Cause all of me
        Loves all of you
        Love your curves and all your edges
        All your perfect imperfections
        Give your all to me
        I'll give my all to you
        You're my end and my beginning
        Even when I lose, I'm winning
        'Cause I give you all of me
        And you give me all of you, oh-oh
        Give me all of you, oh
        Cards on the table, we're both showing hearts
        Risking it all, though it's hard
        'Cause all of me
        Loves all of you
        Love your curves and all your edges
        All your perfect imperfections
        Give your all to me
        I'll give my all to you
        You're my end and my beginning
        Even when I lose, I'm winning
        'Cause I give you all of me
        And you give me all of you
        I give you all of me
        And you give me all of you, oh-oh`,

    descImg: "assets/johnlegend.png",
    songDesc: `“All of Me” is the third single from and sixth track on John Legend’s album Love in the Future (2013). Legend wrote it along with Toby Gad.

        It has become one of Legend’s most popular songs, earning an 8x Platinum RIAA certification and appearing on top of 9 different countries' charts (including the US Billboard Hot 100).
        
        Legend’s performance was nominated for Best Pop Solo Performance at the 2015 Grammys.
        
        Legend has said in interviews that the song was inspired by his passionate love for model Chrissy Teigen, to whom he got engaged in 2011 and married in 2013.`,
  },

  {
    id: "sayyouwont",
    title: "Say You Won't Let Go",
    singer: "James Arthur",
    image: "assets/jamesarthur.png",
    audio: "assets/audio/sayyouwontletgo.mp3",
    lyrics: `I met you in the dark, you lit me up
        You made me feel as though I was enough
        We danced the night away, we drank too much
        I held your hair back when
        You were throwing up
        Then you smiled over your shoulder
        For a minute, I was stone-cold sober
        I pulled you closer to my chest
        And you asked me to stay over
        I said, "I already told ya
        I think that you should get some rest"
        I knew I loved you then
        But you'd never know
        'Cause I played it cool when I was scared of letting go
        I know I needed you
        But I never showed
        But I wanna stay with you until we're grey and old
        Just say you won't let go
        Just say you won't let go
        I'll wake you up with some breakfast in bed
        I'll bring you coffee with a kiss on your head
        And I'll take the kids to school
        Wave them goodbye
        And I'll thank my lucky stars for that night
        When you looked over your shoulder
        For a minute, I forget that I'm older
        I wanna dance with you right now
        Oh, and you look as beautiful as ever
        And I swear that everyday you'll get better
        You make me feel this way somehow
        I'm so in love with you
        And I hope you know
        Darling, your love is more than worth its weight in gold
        We've come so far, my dear
        Look how we've grown
        And I wanna stay with you until we're grey and old
        Just say you won't let go
        Just say you won't let go
        I wanna live with you
        Even when we're ghosts
        'Cause you were always there for me when I needed you most
        I'm gonna love you 'til
        My lungs give out
        I promise 'til death we part like in our vows
        So I wrote this song for you, now everybody knows
        That it's just you and me 'til we're grey and old
        Just say you won't let go
        Just say you won't let go
        Just say you won't let go
        Oh, just say you won't let go`,

    descImg: "assets/jamesarthur.png",
    songDesc: `“Say You Won’t Let Go” is the first single from British singer-songwriter James Arthur’s second studio album, Back from the Edge. The song has peaked at No. 1 in several countries, including the United Kingdom, Australia, Indonesia, New Zealand and Sweden.

        The song’s tender lyrics talk about falling in love with someone at first sight, and wanting to grow old with them. He talks about enjoying and loving her when she is young, and still wanting to be with her when she is old and grey, just as long as she “won’t let go.”
        
        To show how serious he is about his love for her, he even expresses the desire to be with her after they both die.
        
        James Arthur recently explained that a lot of the song came from imagination. “I wanted to write the type of song that guys would want to play for their girlfriends.”
        
        Arthur said of this:
        
        [It’s] about looking at the future and spending your life with someone, even after death.`,
  },

  {
    id: "ispy",
    title: "iSpy",
    singer: "",
    image: "assets/kyle.png",
    audio: "assets/audio/ispy.mp3",
    lyrics: `Man, fuck
        What's wrong Kyle?
        Man, these kids, man, talkin' shit, makin' me feel bad
        Man, fuck them kids, bro! Look around, bro, look at life
        Man, you're right
        Mmm, you see? You see these fine bitches over here?
        Yeah, woah...
        You see these trees man? You see this water?
        I guess it is okay
        Come on, man, you got so much more to appreciate, man
        Man you know what, y-you're right...
        You damn right I'm right, I can't remember a time I was god-damn wrong
        Man, thanks, Lil' Boat
        Hey man, that's what I'm here for
        I ain't been gettin' high...
        Well maybe a little, baby I don't wanna lie
        I know when you text me girl, I don't always reply
        Well you're not an angel either, you can't even fly
        I notice, you think that you know shit
        All this shade that's comin' at me, I wonder who throws it
        They can't see the vision, boy they must be out of focus
        That's a real hot album homie, I wonder who wrote it, oh shit
        Otay, pray them niggas go away
        Always hella clowns around it look like Cirque Du Soleil
        This is not the album either, these are just the throwaways
        This shit still so cold when it drop, it's gonna be a mothafuckin' snow day
        Ayy, boy is good and he knows it, he don't say it, he shows it
        I'm just like DeRozan, if I shoot it, it goes in
        I am in Cali just coastin', get 'em so wet they need coasters
        I got a selfie with Oprah, I just ain't never post it
        And I'm in my happy place posted, I ain't frown since '06
        I ain't cried since '01, my pad like Six Flags and your house is no fun
        You can come back to mine though, your friend ain't cute but it's fine though
        We gon' end on a high note
        I spy with my little eye
        A girlie I can get 'cause she don't get too many likes
        A curly-headed cutie I can turn into my wife
        Wait, that means forever, ever, hold up, never mind
        Oh, I spy with my little eye
        A girlie I can get 'cause she don't get too many likes
        A curly-headed cutie I can turn into my wife
        Wait, that means forever, ever, hold up, never mind
        Oh I, I spy with my little eye
        I spy, I spy with my little eye
        Oh I, I spy with my little eye
        I spy, I spy with my little eye
        Oh I...
        She said she 21, I might have to I.D. that
        All my bitches come in pairs like balls in my nutsack
        I remember ridin' around the city in a Hatchback
        Lookin' for a problem with my young goblins
        I'ma send a model home with her neck throbbin'
        I done made so much money that it's non-stoppin'
        Got my brothers on my back like the last name
        I remember tellin' everyone I couldn't be tamed
        Woah, six months later I had snapped and now I'm in the game
        Went from fake chains to diamonds in another lane
        Went from "Can you take me here?" to skrrting out the lane
        Went from "Damn this nigga lame" to remember my name
        So I remember all the people who ain't fucked with me
        They went to college, now all them niggas is history
        Upgraded from gold to diamonds in my teeth
        Riding deep in the van, like we lookin' for a mystery (Raggy!)
        So don't fuck with me
        No, lately I been livin' like luxury
        Boat and Kyle stick together like piano keys
        And on my mother's mother I won't fuck a bitch without a damn rubber
        I spy with my little eye
        A girlie I can get 'cause she don't get too many likes
        A curly-headed cutie I can turn into my wife
        Wait, that means forever, ever, hold up, never mind
        Oh, I... I spy with my little eye
        A girlie I can get 'cause she don't get too many likes
        A curly-headed cutie I can turn into my wife
        Wait, that means forever, ever, hold up, never mind
        Oh I, I spy with my little eye
        I spy, I spy with my little eye
        Oh I, I spy with my little eye
        I spy, I spy with my little eye
        Oh I...`,

    descImg: "assets/kyle.png",
    songDesc: `KYLE and Lil Yachty link up for “iSpy,” a song about spotting cuties online.

        The song was originally hinted at by KYLE on Twitter
        
        As a single, it peaked at #4 on the Billboard Hot 100 and charted in fifteen countries total.
        
        Eventually, it was featured as the ultimate track on Kyle’s major label debut album, Light of Mine.`,
  },

  {
    id: "cancer",
    title: "Cancer",
    singer: "My Chemical Romance",
    image: "assets/MCR.png",
    audio: "assets/audio/cancer.mp3",
    lyrics: `Turn away, if you could get me a drink
        Of water, 'cause my lips are chapped and faded
        Call my Aunt Marie, help her gather all my things
        And bury me in all my favorite colors
        My sisters and my brothers, still, I will not kiss you
        'Cause the hardest part of this is leaving you
        
        Now turn away, 'cause I'm awful just to see
        'Cause all my hair's abandoned all my body
        Oh, my agony, know that I will never marry
        Baby, I'm just soggy from the chemo
        But counting down the days to go, it just ain't living
        And I just hope you know
        
        That if you say (If you say...) goodbye today (Goodbye today...)
        I'd ask you to be true (I'd ask you to be true...)
        'Cause the hardest part of this is leaving you
        'Cause the hardest part of this is leaving you`,

    descImg: "assets/MCR.png",
    songDesc: `The Black Parade takes listeners on a journey through the death of a man dubbed “The Patient.” This track reveals the driving force behind the protagonist’s death — cancer. It expresses his agony as he asks to be told the truth.
  
        In an interview, frontman Gerard Way said that, while the song is literally about cancer in one sense, it is being used as a metaphor at the same time.
        
        A little-known fact about the song is that lead guitarist Ray Toro played bass on the studio track instead of Mikey Way.
        
        A live version of this track appears on the CD single of “I Don’t Love You.”`,
  },
];

function getSongById(id) {
  return songs.find((song) => song.id === id);
}

function displaySongDetails(song) {
  if (song) {
    document.getElementById("song-img").src = song.image;
    document.getElementById("song-title").innerText = song.title;
    document.getElementById("singer").innerText = song.singer;
    document.getElementById("lyric").innerText = song.lyrics;
    document.getElementById("song-audio").src = song.audio;
    document.getElementById("song-desc-img").src = song.descImg;
    document.getElementById("song-desc-text").innerText = song.songDesc;
  }
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const songId = getQueryParam("id");
  const song = getSongById(songId);
  displaySongDetails(song);
});

// MP3 ON INDEX.HTML AND SONGDETAIL.HTML

if (
  window.location.pathname.endsWith("Index.html") ||
  window.location.pathname.endsWith("songdetail.html")
) {
  // MUSIC PLAYER

  let progress = document.getElementById("progress");
  let music = document.getElementById("song-audio");
  let ctrlIcon = document.getElementById("ctrlIcon");
  // let cttlBackward = document.getElementById("ctrlBackward");
  // let ctrlForward = document.getElementById("ctrlForward");

  music.onloadedmetadata = function () {
    progress.max = music.duration;
    progress.value = music.currentTime;
  };

  function playPause() {
    if (ctrlIcon.classList.contains("bx-pause")) {
      music.pause();
      ctrlIcon.classList.remove("bx-pause");
      ctrlIcon.classList.add("bx-play");
    } else {
      music.play();
      ctrlIcon.classList.add("bx-pause");
      ctrlIcon.classList.remove("bx-play");
    }
  }

  music.addEventListener("timeupdate", function () {
    progress.value = music.currentTime;
  });

  progress.onchange = function () {
    music.play();
    music.currentTime = progress.value;
    ctrlIcon.classList.add("bx-pause");
    ctrlIcon.classList.remove("bx-play");
  };
}
