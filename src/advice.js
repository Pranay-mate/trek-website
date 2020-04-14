import React from "react";
import mobile_hills from "./data/mobile+hills.jpg";
import both from "./data/both.jpg";
import hills from "./data/hills.jpg";
import "./css/advice.css";

function Advice() {
  return (
    <div className="advice">
      <h1> 5 Reasons You Should Begin Trekking </h1>
      <p>
        “We trek not to escape life, but so life doesn’t escape us.” Our busy
        lives may not give us the time to realise that most of us merely
        survive; not live. Gift yourself the freedom and happiness you deserve.
        Here’s a list of 5 reasons why you should begin trekking.
      </p>
      
      <h3>1. You’ll regret not doing it when you are old</h3>
      <p>
        A lot of us strongly express our desire to travel, and yet we suffix our
        beautiful thoughts with the most fatal word –<br />
        But’ work, ‘but’ kids, ‘but’ family and everything else under the sun.
        <br />
        It is true that as we get older, life mostly just “happens” to us, and
        we lose control over it. But, your body is not going to support your
        heart’s desire forever. And don’t forget, you are not guaranteed a long
        life.
      </p>
      <img src={hills} className="image" alt="Responsive img" />
      <h3>2. You’ll never get this close to nature</h3>
      <p>
        Trekking is a beautiful way of travelling. It’s real – it is an
        unscripted experience filled with surprises. Take a chance and view the
        world without a filter. The views and undiscovered spots you get to see
        on a trail are ones that no world class tour can guarantee you. <br />
        “I have seen trekkers burst into tears everytime they see a captivating
        view. Even people who have gone on international vacations have reacted
        this way. The mountains have the ability to touch your soul. It’s the
        most beautiful feeling.” says Manish Pasad, veteran trek leader at
        Indiahikes. Lie down on a green meadow under the blanket of stars, or
        run around with the mountain goats like Heidi! You’ll never get this
        close to nature anywhere else.
      </p>
      <img src={hills} className="image" alt="Responsive img" />
      <h3>3. Life lessons</h3>
      <p>
        You’re far from civilization and the only thing you can embrace is the
        serenity of the world. “You get a chance to meet people from diverse
        backgrounds, and build lasting relationships. The purity of the
        mountains teaches us to embrace experiences, cultures and relationships
        that are outside our comfort zone,” shares Manish Pasad, who has been on
        wanderlust for the past 27 years.
        <br />
        Trekking humbles you enough to learn that it’s not all about you. You
        are often put in challenging situations that make you realise that the
        world is so much bigger than your perspective on it. You weren’t really
        the big fish in the ocean but a tiny minnow in a pothole.
      </p>
      <img src={hills} className="image" alt="Responsive img" />
      <h3>4. Exercise</h3>
      <p>
        While trekking, your entire focus is on the beauty of the surroundings
        that you get exposed to. You tend to forget the fact that you are
        actually burning calories in the process. <br />
        The whole experience of walking in the glory of the mountains is
        extremely relaxing and refreshing. “I was gyming for quite sometime, but
        I never really lost more than half a kilo. And the worst part was, I
        used to gain much more than what I lost when I stopped gymming,” says a
        miffed Latika Payak. “Then, I went for my first trek to Roopkund and in
        just 6 days, I lost 3 kilos. And I’m not gaining it back. Which means my
        metabolism has improved,” she says.
        <br />
        So, ditch the gym and take a hike!
      </p>
      <img src={hills} className="image" alt="Responsive img" />
      <h3>5. Disconnect. Slow down. Breathe.</h3>
      <p>
        How often do you find yourself rushing from A to B, with no time to
        breathe? Whether you are climbing the corporate ladder, building your
        own business, or assuming family responsibilities, it is easy to get
        caught in a mundane scripted life.
        <br />
        “I was such a chirpy person, but the monotony of life had taken the ‘me’
        out of me. I was sad and disliked everything happening in my life – it
        was a tough patch.” recollects Srilakshmi, now an avid trekker with
        Indiahikes. “That’s when Roopkund happened to me – my first trek ever. I
        felt a sense of calm. I was singing, smiling and I was in a completely
        different frame of mind. To be honest, trekking to me is medicine. It
        healed me and transformed my outlook to the world completely,” she
        shares.
        <br />
        So, disconnect and give yourself the freedom you deserve. Life is not
        meant to be a time-table (at least, not always).
      </p>
      <img src={hills} className="image" alt="Responsive img" />
    </div>
  );
}
export default Advice;
