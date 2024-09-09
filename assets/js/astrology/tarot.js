let Count = sessionStorage.getItem('Tarot');
const myCards = [
  {key: 'Wheel Of Fortune',
   meaning: 'The central theme of The Wheel of Fortune card is cyclical change. The wheel keeps on rolling, churning events in a ceaseless progression of ups and downs, either way freeing us from the past. No one can escape its cyclical action, which can feel somewhat terrifying -- no matter whether we are rising or falling. When one is balanced on top of the wheel, there is a moment of crystal clarity. However, the only part of the wheel that is actually not going up and down is the hub, which represents your eternal self. Every one of us will occupy all the points on the wheel at one point or another. The cycle of the wheel is its lesson -- and we can learn to take comfort in it. If you do not like the look of things right now, just wait -- things will change. Of course, if you do like the look of things right now, enjoy it while it lasts, because that will change too!',
   Advice: 'The Wheel of Fortune advises you follow the flow of events. Physical moves, spiritual awakenings, or dramatically changing social patterns could arise now. Accept these transformations. This is a safe place for you to be. You are watched over and protected as you go round and round the wheel. You will learn a lot. You will also learn it quickly, and what you absorb will benefit you for a long time to come.',
   Love: 'The Wheel of Fortune in this position indicates that your mind or your heart just wont keep still. It keeps churning up new developments or issues that you thought were resolved between you and your next potential partner. This is the nature of The Wheel of Fortune that never ceases to turn. You probably feel like you want to get off life Ferris wheel once in a while, but there is only one good way to do that -- take refuge in the hub, the center from which all the motion is emanating. Much as you might like to, there is no way to stay on top all the time. Your ultimate challenge is to learn to peak and drop without resisting the process, including all its ups and downs.',
   Career: 'When the Wheel of Fortune is in this position, your circumstances surrounding work are fluctuating. Do not take it personally because you may be in the presence of a force no mortal can control. The immediate future of your current job appears uncertain. No one can blame you for feeling a bit overwhelmed or confused. Try not to dwell on that. Think of this great Wheel as being like a cosmic washing machine. If you can put up with the churning, the rinse cycle and the final spin, the end result will see you refreshed, like new. The energy of this card certainly can feel like you are going in circles. But it is more like a spiral staircase, and you will end up exactly where you wanted to go. (Even so, it can be a challenge to keep your composure during the turning!) Wait and watch, and as you do so, try to absorb and understand the changes you are going through. You wont get lost if you follow the flow',
  YesOrNo: 'The Wheel of Fortune is a card of patterns and cycles. If you are looking for simple Yes or No guidance and receive The Wheel of Fortune, the answer is NO. Wait for now -- elements are still in motion.',
  image: 'ar10.jpg'
  },
  {
      key: 'Temperance',
      meaning: 'The Temperance card is a reference to the soul. Classically female, the woman or angel on the Temperance card is mixing up a blend of subtle energies for the evolution of the personality. One key to interpreting this card can be found in its title -- a play on the process of tempering metals in a forge. Metals must undergo extremes of temperature, folding, and pounding, but the end product is infinitely superior to impure ore mined from the earth. In this image, the soul volunteers the ego for a cleansing and healing experience, which may turn the personality inside-out, but which brings out the gold hidden within the heart.',
      Advice: 'The Temperance card advises you to identify and seek the missing ingredients in your life. Marshal your known skills and abilities and do what needs to be done to complete your mission. Prepare to use spiritual practices, studies, or lifestyle changes that can assist you in your quest. A tremendous amount of benefit is available if you can organize yourself and be disciplined at this time.',
      Love: 'With Temperance in this position, you are ready to take responsibility for getting well, no matter what it takes. The quest for health could be on a physical, emotional or mental level, or it may have to do with paying off "karmic dues." In any case, the work is to clear up past dysfunction and address entangled emotions in your potential relationship. The process will purge the toxic waste of unfinished business with your future partner that disables you. When you are ready, mix your powerful medicine. This is the right time to start healing yourself.',
      Career: 'An energy of harmony has been called in and the remedy for the faulty functioning is being sought. Corporate white blood cells are being dispatched to mend the breech. This is a chance to let go of old roles and timeworn projections. You and your coworkers needed conditions on the job to change and now they are. Do not give up now by thinking that this situation is beyond salvaging. There is something that you are learning by staying aboard and assisting with the turnaround. Sometimes the remedy is in going through the process, rather than attaining or failing to attain any given outcome.',
      YesOrNo: 'Temperance is a card of unseen support. If you are looking for simple Yes or No guidance and receive Temperance, the answer is NO. Take a break and allow yourself a moment to breathe.',
      image: 'ar14.jpg'
  },
  {
    key: 'The Devil',
    meaning: 'The Devil Tarot card expresses the realm of the taboo -- the culturally rejected wildness and undigested shadow side that each of us carries in our subconscious. This shadow is actually at the core of our being, which we cannot get rid of and will never succeed in taming. From its earliest versions, which portrayed a vampire-demon, The Devil evoked the church-fueled fear that a person could "lose their soul" to wild and passionate forces. The Devil image which emerged in the mid-1700s gives us a more sophisticated rendition -- that of the "scapegoated goddess," whose esoteric name is Baphomet. Volcanic reserves of passion and primal desire empower her efforts to overcome the pressure of stereotyped roles and experience true freedom of soul.',
    Advice: 'The Devil card advises that you show some spunk. There may be nothing to be gained by trying to be subtle or strategic in this situation. Assert your agenda, express yourself honestly, and let the chips fall where they may. Your best bet could be to express your true emotions, possibly even including anger. Acknowledge that you have whatever feelings you have. While it may not be necessary to act out what you feel in every situation, accepting the power and depth of your inner experience enables you to remain true to yourself.',
    Love: 'The Devil card symbolizes letting those parts of yourself that have been repressed or shamed out of the closet. It represents hidden parts of ourselves, what Jung referred to as "Shadow." In general, we fear its emergence, but this card is reminding you to face your shadow stuff. Whenever we reveal hidden inner dynamics, we fear we will be seen as ugly, demanding or excessive, even monstrous. We are conditioned to mistrust passionate desires and basic instincts, because we are afraid that we might go too far, slipping into hedonism or addiction. To become a charismatic individual who can make a difference in your forthcoming love relationship, however, you need to outgrow fearful inhibitions placed upon your personally and self- expression. In every generation there have been those who push these limits. They may have been demonized in their time, but later generations understood the honesty, courage, and healing power of their daring.',
    Career: 'The Devil card in this position suggests that you may be facing a level of responsibility on the job that you dreaded in the past. If so, consider it an educational opportunity. Refrain from judging things in black and white terms, or as good and bad, and you will be able to tap the tremendous energy that is available in the current situation. Emphasize what you have in common with others, rather than the differences. The ultimate outcome could evolve in a number of different directions and through several related projects, depending upon how you apply your will and act in the situation. A surge of potent energy could find expression through creative achievement or it could degenerate into a self-centered power trip. If you are sensitive to how the life force wants to move, you can refrain from interfering with it. Otherwise, you might stand in the way and then be tempted to believe that all the important movement is about you.',
    YesOrNo: 'The Devil is a card of feeling trapped. If you are looking for simple Yes or No guidance and receive The Devil, the answer is NO. Think through the unintended consequences of whatever you are considering.',
    image: 'ar15.jpg'
   },
   {
    key: 'The Tower',
    meaning: 'In practically all renditions of the Tower card, disaster is striking or has just struck. The demons of madness and despair are released from ancient hiding places, and nature conspires with human failings to destabilize a society. The upheaval is collective and impersonal. Let us remember these images were created for the educated nobles and clergy -- reminding them that they have the most to lose if the hierarchy is toppled. Lightning is a fitting karmic payback for the guilt of those whose fortunes come from the exploitation or abuse of others. A modern subtitle might be "revolution," indicating that through drastic social change, oppressed people can find renewed hope of better times. The Tower experience comes like a flash of lightning to topple the hierarchy of the old order, after which everyone can have a fresh start on a more equal footing.',
    Advice: 'With the Tower card, think of yourself as an agent of transformation. This self-sacrificing role is likely to create stressful situations. Your vision shows you that a radical change has already been unleashed by forces much larger than mere mortals, and therefore you are no longer resisting. Now you may be at the forefront, acknowledging and accepting the bracing presence of the future bursting in on the present. Try to mediate the harsher parts of the changes as they unfold, so the most vulnerable are the most cushioned. Acknowledge yourself, as well as the others in your life, who are offering their resources to usher in a better future.',
    Love: 'The Tower represents an explosive charge that is unplanned and uncontrollable but presents a brilliant opportunity for transformation in your forthcoming relationship. Because of circumstances beyond your control, you may have no choice. Try not to judge whether this development is good or bad. You wont know for awhile whether this was the worst disaster that ever happened or a significant breakthrough. It could be a combination of both.',
    Career: 'When the Tower is in this position, an overflow of energy may be seeking release in the workplace. The manner of its appearance may come as a shock. And, until the tension breaks, neither you nor your coworkers may feel completely secure. This could manifest as an event that appears to occur by accident or it could be a natural development that has been building over time. At any rate, the highly charged situation is currently at critical mass. Even a tiny shift in the energy and conditions could become unrestrained. This will turn out to be a watershed event. Some will interpret it a great disaster while others will call it a great liberation. Nevertheless, be aware that the situation may be volatile and unstable. Stay alert and vigilant. One or more of your coworkers may be in need of your assistance at this crucial moment.',
    YesOrNo: 'The Tower is a card of destruction that clears the way for new beginnings. If you are looking for simple Yes or No guidance and receive The Tower, the answer is NO. Let the dust settle before deciding what comes next.',
    image: 'ar16.jpg'
   },
   {
    key: 'The Star',
    meaning: 'The Star Tarot card is about reconnecting one&apos;s soul with the divine -- the transcending of personality, family, community, and reputation. It has to do ultimately with the freedom to be one&apos;s self. The soul is responding to celestial influences -- forces that can provide the personality with a stronger sense of purpose. The Star card helps us to remember our exalted origins and our attraction to a higher union. This card could also be called The Celestial Mandate -- that which refers us back to our reason for being, our mission in this lifetime. The Star reminds us that, in a sense, we are agents of divine will in our day-to-day lives. If we let go of the idea that we are supposed to be in control, we can more easily notice and appreciate the synchronicities that are nudging us along. In this way, we become more conscious of the invisible helping hand, and we better understand our place within -- and value to -- the larger cosmos.',
    Advice: 'The Star card advises that you rededicate yourself to your higher values, increase your spiritual cultivation and meditation practice, and surrender to the greater good. Connect to your higher self -- a being of a larger realm traveling on an evolutionary course that started long ago and runs indefinitely into the future. This is the part you wish to contact and communicate with. Now is a period for quiet contemplation. Listen for the voice within. Anything that would interfere with this communion may not be serving your best interests right now.',
    Love: 'The Star suggests that you may receive information from your higher self about the reason you came here -- to this planet at this time. This is a profoundly reorienting experience. As we touch our greater self, the eternal aspect, our personal lives and love relationships come into better perspective. The feeling of being a stranger in a strange land vanishes. Great joy is inherent in this card&apos;s placement. You are consciously on the way home in a spiritual sense, no longer flailing in the dark.',
    Career: 'When the Star is in this position, you may work with an individual who understands his or her true purpose, someone who has a mission in life. There is great wisdom available to this person and he or she is not caught up contesting the way things are. This is a person who lives their life from the inside out, uncontrolled by external events. He or she maintains composure and accepts gracefully whatever unfolds in the workplace without needing to challenge the current circumstances. Ask yourself, What kind of trust does a person have to have to proceed with such openness? This accomplished soul provides a unique vision of one who harmonizes with life. And yes, this is something you could emulate and achieve for yourself!',
    YesOrNo: 'The Star is a card of hope. If you&apos;re looking for simple Yes or No guidance and receive The Star, the answer is YES. Believe in the best case scenario.',
    image: 'ar17.jpg'
   },
   {
    key: 'The Moon',
    meaning: 'The Moon card refers to a deep state of sensitivity and imaginative impressionability, developed within a womb of deep relaxation. Here we dream and go into trance, have visions and receive insights, wash in and out with the psychic tides, and experience deep mystical and/or terrifying realities beyond our ordinary senses. In a state of expanded consciousness, we cannot always control what happens. The Moon card represents the ultimate test of a soul&apos;s integrity, where the membrane between the self and the unknown is removed, and the drop of individuality re enters the ocean of being. What transpires next is between a soul and its maker.',
    Advice: 'The Moon card advises that you trust your instincts and intuitions. Your intuitive body, which is connected to all living things, is sharper and quicker than the cultivated, civilized self. The everyday mind may not be prepared for strange oceanic circumstances. Plus, it has no game plan. Your intuitive body will support you unerringly if you do not interfere with or try to control what you perceive. A better approach would be to meditate. Try to just be a witness. Do nothing; let nature carry you forward. This may be your best option in this situation.',
    Love: 'With the Moon in this position, you are cast into your deepest unknown. Not to be seen as either bad or good, this is an opportunity to penetrate your inner life. You may be familiar with this experience or you may never have experienced it before in your life. You are moving between worlds, shifting and modifying. Reality changes from hour to hour. Your rational mind has deserted you, leaving instinct and intuition as your guides, especially in your forthcoming relationship. All the architecture of civilization has been stripped from your personality and you are naked unto yourself.',
    Career: 'When the Moon is in this position, the leadership in your corner of the work world may have collapsed and fallen in on itself. Nothing is as it seems. The people you deal with in your work may be suffering from delusions. Each claiming their myth is the one legitimate and absolute version. Battle lines are being drawn. It may be best to slink into the shadows and wait this situation out. If you are compelled to navigate this landscape, stay in the light as much as you can while steering a middle course between extremes. Whatever could possibly happen is likely to happen. Stay alert and you can avoid getting pulled into any emotionally or politically draining vortexes.',
    YesOrNo: 'The Moon is a card of mystery. If you&apos;re looking for simple Yes or No guidance and receive The Moon, the answer is NO. Look for what&apos;s not so obvious before making your next move.',
    image: 'ar18.jpg'
   },
   {
    key: 'The Sun',
    meaning: 'The Sun card is about the self -- who you are and how you cultivate your personality and character. The Sun&apos;s radiance is where one&apos;s original nature can be encountered in health and safety. The limitations of time and space are stripped away; the soul is refreshed and temporarily protected from the chaos outside the garden walls. Under the light of the Sun, life reclaims its primordial goodness, truth, and beauty. If one person is shown on this card, it is usually signifying a human incarnation of the divine. When two humans are shown, the image is portraying a resolution of the tension between opposites at all levels. It&apos;s as if this card is saying "You can do no wrong -- it&apos;s all to the good!"',
    Advice: 'The Sun card advises you to have confidence in your natural divinity. Throw off any cultural conditioning that keeps you from being authentic with yourself. Step into the full light of truth and reveal your motives and principles. Once done, you will no longer give away power to the people that criticize and shame you. Focus on the positive and the real. Your authentic shining self can be a light for others if you project it without contrivance.',
    Love: 'The Sun in this position symbolizes a return to Eden, a return to your original nature. This is the card of the person who is expressing the highest creativity and doing her or his best work. Your motives, outlook, beliefs and relationship goals are all synchronized. There are no hidden motives, nagging doubts or fear of the outcome. Relax, look around and enjoy the wonderful view from the center of your universe.',
    Career: 'When the Sun is in this position, you are in charmed company as a valued member of a creative, progressive work team. This is an exciting time in your life. The fascinating and challenging projects coming your way may elicit some of your best work. You are really motivated to shine on the job. This is one of those periods when the boundaries between work and play tend to disappear. Enjoy this time for as long as it lasts.',
    YesOrNo: 'The Sun is a card of understanding and enthusiasm. If you&apos;re looking for simple Yes or No guidance and receive The Sun, the answer is YES. Go into your next steps with eyes wide open.',
    image: 'ar19.jpg'
   },
   {
    key: 'Judgement',
    meaning: 'The Judgement card, sometimes called "Resurrection," represents the great reunion that the ancients believed would happen once in every age. This was the time when souls are harvested and taken home to their place of origin, outside the solar system. Then the world is seeded with a batch of new souls and the process starts over. From a modern point of view, this great reunion -- which includes every personality that you have ever been and every soul that you have done deep work with -- reunites to consciously complete the process. In a way, we symbolically celebrate this returning to center every year on our birthday. In personal terms, the Judgment Tarot card points to freedom from inner conflicts, and so clear a channel, that the buried talents and gifts of past incarnations can come through an individual in this lifetime. This card counsels you to trust the process of opening yourself, because what emerges is of consistently high quality. You can effortlessly manifest as a multi-dimensional being, and assist in evoking that response from others. ',
    Advice: 'The Judgment card advises that you allow yourself to grow, transform, and release hidden potentials within yourself. Divest yourself of fruitless endeavors without neglecting your duties. At the same time, invest your energies in new growth. It&apos;s not necessary to reject others, but refuse to be manipulated by those who cry foul. This process isn&apos;t about them anyway. It is about you and the desire you feel to change your life and become a more complete person. Trust your impulses and allow this remarkable awakening to happen. ',
    Love: 'The Judgment card symbolizes redemption -- a wake-up call combined with the re-integration of missing parts of your self. The common image of people rising out of the grave symbolizes various aspects of the whole self-returning to consciousness: subconscious contents, dream time visions, the emotional body, the soul itself. These are aspects of yourself or of a possible relationship with your desired partner that might be neglected, sacrificed, sublimated, destroyed, lost or simply undiscovered. A process of transformation allows you to access them consciously. The experience of subtle dimensions is a mystery which words cannot adequately explain. Through your forthcoming relationship let yourself be receptive to profound moments of reckoning when they come. ',
    Career: 'When Judgment is in this position, it&apos;s as if you and your associates at work are coming out of a trance. Options that you thought were long past may be miraculously resurrected. You are gaining greater powers of discernment about current events and breaking through barriers that formerly divided you. Reevaluate current conditions on the job. Ideas that were originally taken lightly may still have a surprising amount of punch left in them. It takes extraordinary circumstances to evoke simultaneous awakening in an entire group, be sure not to let this opportunity slip by. Making this passage together will bond you and the others into an irresistible work force. ',
    YesOrNo: 'Judgement is a card of adventure and awakening. If you&apos;re looking for simple Yes or No guidance and receive Judgement, the answer is YES. Follow your sense of purpose and calling, regardless of the situation. ',
    image: 'ar20.jpg'
   },
   {
    key: 'The World',
    meaning: 'The World card points to the presiding wisdom which upholds life on this and all worlds. In most Tarot decks, it is a female figure that has become our standard World image. She originates in Hebrew, Gnostic, and Alchemical lore, and stands between heaven and Earth as the cosmic mother of souls, the wife of God, and our protector from the karmic forces we have set loose upon the Earth in our immaturity and ignorance. The goddess of The World card invites us into cosmic citizenship -- once we come to realize our soul&apos;s potential for it. It announces the awakening of the souls immortal being, accomplished without the necessity of dying. This card, like the Sun, is reputed to have no negative meaning no matter where or how it appears. If the Hermetic axiom is "Know Thyself", this image represents what becomes known when the true nature of self is followed to creative freedom and its ultimate realization.',
    Advice: 'The World card may be giving you permission to do whatever you want. Presently, your motivation is close to the will of the divine. Even if you commit an error, it will be turned to the greater good. Stay active and just keep moving forward. It is unnecessary to keep checking or interrupting your spontaneity with calculation. Rather than look for consensus or affirmation from others, simply dance the dance. In other words, express yourself, react naturally, and let the chips fall where they may. What matters is divine intention. Whether or not human beings approve is less important. If you allow your ego to inflate, however, you cease to be useful to the greater plan. ',
    Love: 'The World in this position symbolizes the energy of the Great Goddess Sofia -- the universal womb from which all manifestation comes forth. This state of consciousness is characterized by a balance between the Inner Life and the Outer Life. In this state you are no longer alienated from other life forms, great and small. You worked hard through many cycles to achieve such a mystical experience. Your ego can no longer block the light of awareness that moves through you. According to the Tarot, the spiritual mission of human beings is to mediate the three worlds of universal consciousness, self-consciousness and the collective unconscious. When such epiphanies happen, we experience ourselves in a timeless state of grace where there is no doubt, shame, or grief. Such a moment is priceless and worth all the work and waiting. It&apos;s the culmination of all your efforts and a harbinger of remarkable potentials, romantically and otherwise. ',
    Career: 'When the World is in this position, you may be approaching the circumstances you planned, organized and labored for. The hard times are over for you and the people who work with you. Finally, the end is in sight. Your shared ambition has kept you on target, despite the internal and external forces obscuring the way. All signs point to a bull&apos;s eye. The group achievement far surpasses what any of you could have done alone. Pause for a while and enjoy this moment. Recognize that as a team, you have completed what you set out to achieve. Whatever else happens, this achievement will make a difference in this world. ',
    YesOrNo: 'The World is a card of unity and wholeness. If you&apos;re looking for simple Yes or No guidance and receive The World, the answer is YES. View your present experience as a full circle moment, a fitting conclusion to a certain chapter.',
    image: 'ar22.jpg'
   },
   {
    key: 'Ace of Wands',
    meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. An Ace of this suit in this position symbolizes a pivotal act, or fateful step, that will set loose a chain of events leading toward your desired goal. It refers to a birth or new beginning, the inauguration of an endeavor, and the building of the necessary commitment to see a project or plan through. It personifies an aroused Will that is totally focused, aiming at the bulls-eye.',
    Advice: 'The Ace of Wands in this position encourages energetic movement toward activity. Brace yourself and get ready to spring into action. You may need to make your move soon, so make sure you are fully prepared. Trust your instincts and spontaneity. When the opportunity comes, you may want to seize it without hesitation. So quicken your senses and raise your antenna. There&apos;s excitement in the air, and supports your immediate ambitions. ',
    Love: 'The Ace of Wands in this position signifies your personal point of focus, advising you to take action to stay in alignment with your goals. Wands is the suit of the fire element which can be used to activate and accelerate change, chemical transformation, communication and realization. Much to your benefit, change is ignited as you make the challenging transition from theory to action, but you must remain clear about the mutual goal that will unite you and your future partner. An ace signifies the seed, the start point, a first step. If you handle yourselves properly, if you take advantage of this opportunity, your next relationship can mature into a great success. Stay unified with your goal. ',
    Career: 'The Ace of Wands in this position reminds you that certain truths unite us across every dividing line. One of those igniting, self-evident truths could be coming into focus in your career or workplace right now. You have it in you to revitalize the collective mind and rally the troops if you can remain non-competitive. This is both awe inspiring and exciting. If you merge your individual will with the greater good you will be inspiring your coworker&apos;s best efforts. ',
    YesOrNo: 'The Ace of Wands is a card of fresh inspiration. If you&apos;re looking for simple Yes or No guidance and receive the Ace of Wands, the answer is YES. Take a chance and look for learning opportunities.',
    image: 'waac.jpg'
   },
   {
    key: 'Two of Wands',
    meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. The Two in this suit, often portrayed as crossed wands, imply a deadlock due to energies working at cross-purposes. This could refer to an internal split -- perhaps a duel between optimistic and pessimistic parts of your psyche, for example -- or some situation where you feel "damned if you do, damned if you don&apos;t." This could be a standoff with another person or rubbing up against limitations that are currently imposed upon you. This card points to the possibility of creeping self-doubt -- the kind that arises in a situation where one has bitten off more than one can chew. Give yourself a moment to take in the full implications of your situation. Find your bearings again before launching back into action. Deal with real concerns now -- before they become regrets! ',
    Advice: 'The Two of Wands in this position advises you to respect your own decision making process. Instead of criticizing yourself for indecisiveness, appreciate the various implications of possible choices. Avoid pushing yourself to make a commitment. Keep meditating, watching the situation and witnessing the forces at work. At some point you will have enough information to see clearly. The decision-making process will be over and the choice will be clear.',
    Love: 'The Two of Wands in this position indicates a need to stop and get your bearings. Your path has seemed erratic and unclear, necessitating new choices every few steps. Make no moves that will produce permanent consequences until you have worked your way through this period of confusion or insecurity with your potential partner or love interest. The uncertainty will pass and you will see the bigger picture again. If you are patient and sincere, the right path will be revealed to you.',
    Career: 'The Two of Wands in this position reveals a work group that has lost some clarity about its goals, getting stuck on small details. Although this can feel frustrating to an ambitious person, it may be wise to accept this kind of delay as a natural phase. The members of the group have not yet come into alignment around their highest common interests. This could be caused by some unresolved issue or conflict that may be giving rise to feelings of anxiety. Cultivate patience in order to manage your way through the current situation. Change could take time to fully reveal itself. While everybody at work knows the old way is over, the new way is not totally clear and has not been fully articulated.',
    YesOrNo: 'The Two of Wands is a card of vision and planning. If you&apos;re looking for simple Yes or No guidance and receive the Two of Wands, the answer is YES. Keep your long-term goals in mind.',
    image: 'wa02.jpg'
   },
   {
      key: 'Three of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. A Three in this suit symbolizes an inner balance that allows you to feel more optimistic about new endeavors you are committed to, or want to commit to. In the illustrated Tarots, the human character is standing on his balcony, watching ships leave the harbor, loaded with his goods for far-off ports, dreaming of the fortune he will reap if all goes well. Summon the optimism within you. This energy must be patient and trusting, because he or she will have to wait some time to find out how the ships have fared. Meanwhile, a lot of resources are tied up until they return with the bounty. Only those truly confident in their ideas and abilities would undertake such a risk. This card represents the energy a person needs to take on great adventures and accomplish noble (and remunerative) deeds. A detail that sometimes appears in the more esoteric Tarots is a winged wand with two snakes twining around it, called the Caduceus, which is Mercury&apos;s wand. This is an ancient symbol of the healer or shaman, one who can travel between the worlds to rescue souls from death or possession. Perhaps the feeling of empowerment this card represents points to the internal mechanisms of self-healing. Perhaps it refers to the courage it takes to be an entrepreneur or an inventor, which is in itself a magical process -- bringing not only opportunity for success, but also an awakening to higher potentials.',
      Advice: 'The Three of Wands in this position advises you to act quickly and powerfully on an idea or desire you have been feeling. This card suggests exquisite timing, staying in the moment and responding to your instinct or intuition. Every fiber of your being may be saying this is a great opportunity, even if those around you aren&apos;t as convinced. There&apos;s nothing to lose from taking a risk; this is a great moment in your entrepreneurial growth. Make your move and sort out the details later.',
      Love: 'When the Three of Wands is in this position an adventure is about to be set in motion. This card represents the burning drive that compels a person to risk his or her worldly fortunes for a chance at greatness. Committed to a plan of action, you and a possible partner may be poised to gather resources for a step by step procedure. An enterprising spirit inspires you both to strike out in this new direction rather than stay with the status quo. Now you can confidently set out on this journey of exploration and hopefully, enrichment.',
      Career: 'When the Three of Wands is in this position, excitement and innovation may be emerging in your work environment or career. Everyone around you feels the effects in a way that improves morale and reminds you just how good it is that you are doing what you are. The challenges are invigorating and arousing, and as a group you may be about to do your best work. Take advantage of this energy field of inspired optimism. A risk taken at this time could have a better-than-average chance of working out well.',
      YesOrNo: 'The Three of Wands is a card of reflection and evaluation. If you&apos;re looking for simple Yes or No guidance and receive the Three of Wands, the answer is YES. Take stock of what you&apos;ve done so far and think through what still lies ahead.',
      image: 'wa03.jpg'
   },
   {
      key: 'Four of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. A Four in this suit is the teamwork card, often symbolized by two couples who have come together to create something profitable and enduring. Quite likely, they will create a gift for the future -- a business, hospital, theater or university. They represent the founding families of the future community that will grow around their inspiration. Teamwork is the key. It takes time to build a grand vision; and other people of ambition and talent must be attracted to it for it to fulfill its potential. What we see here is the start-up group, the founding visionaries committing their energies to designing the blueprints and laying the groundwork. This partnership is the prototype for society or any grouping where the whole is greater than the sum of the parts',
      Advice: 'The Four of Wands in this position supports your good, productive, evolutionary ideas. Concentrate on networking: use your charisma and power to attract like-minded souls so you can significantly increase your sphere of influence -- the more people you can reach, the better. Your enthusiasm empowers your vision, which is thriving with possibilities. As you share more freely what is on your mind and in your heart, others will see themselves in your vision, so you naturally receive approval, support, assistance and abundance. In your own way, you are addressing a universal need.',
      Love: 'The Four of Wands in this position suggests a group is forming that shares a common vision more complete and with more potential than any vision you and a possible partner may dreamed separately. Synergy is happening. The benefits of your significant efforts will be felt not only in your immediate circle, but especially within your future relationship. This new relationship include participating together in a successful business, civic project or creative endeavor.',
      Career: 'The Four of Wands in this position suggests that you may be drawn into the circle of creative, stimulating, high-energy people available to you at work or in your career. This card indicates the birth of a new idea, approach, product or service. The real possibility of synergy within the group strongly suggests that the process will be fertile and productive. If you have an opportunity to support, join or loan your energy to co-workers like this, you might consider doing so without hesitation. Together, you could prove to be more potent than you are apart.',
      YesOrNo: 'The Four of Wands is a card of celebration. If you&apos;re looking for simple Yes or No guidance and receive the Four of Wands, the answer is YES. See and savor the joy in the situation.',
      image: 'wa04.jpg'
   },
   {
      key: 'Five of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. The Five of this suit symbolizes struggles caused by ambitious maneuvering and a competitive urge. This could be about someone who is pushing his or her agenda forward at the expense of others. There can be a fine line between demonstrating personal excellence and making others feel like losers. It may be necessary to ask yourself, who is it that really benefits when we all fight so hard for such small rewards? Am I serving a negative, manipulative agenda when I start applying battle metaphors to business? Even when your only motive is to be the best you can be, it is understandable to want recognition for what is fine and unique about you. However, minimize the number of egos bruised in the process or your success will be celebrated alone.',
      Advice: 'The Five of Wands in this position encourages you to find your natural ambition. Identify what energizes you, what you would fight for and what you are passionate about -- even when you&apos;re tired or discouraged. Strive to make that the centerpiece of your mission. This is how you find your livelihood and establish your path of service.',
      Love: 'When the Five of Wands falls in this position, the message is to focus on the goal that you and a potential partner share, rather than the struggle. Sometimes it may be necessary to push yourself through resistance to make things happen. In order to succeed in a worthy partnership enterprise, one needs to be prepared to deal with obstacles and competitors. Growing a thicker skin helps, as does learning not to take small matters too seriously. You and your desired partner have every reason to feel confident about your ability to succeed at whatever you commit to. You could most likely have the power to sustain yourselves through this stage.',
      Career: 'The Five of Wands in this position indicates something in the work environment may be pitting you against co-workers and increasing your sense of isolation. Communications that were once harmonious could now be fraught with one-upmanship. If this is the case, it may be difficult not to get caught up in conflicts and competition. In a situation like this, consider the big picture rather than getting taken in by petty disagreements. Step back, examine the matter dispassionately and trace the source of this disturbance.',
      YesOrNo: 'The Five of Wands is a card of conflict and confusion. If you&apos;re looking for simple Yes or No guidance and receive the Five of Wands, the answer is NO. Take enough time to truly understand every perspective and priority.',
      image: 'wa05.jpg'
   },
   {
      key: 'Six of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. The Six of this suit points to the respect and acknowledgment due to you for your efforts to solve the problems of your community. The image is usually of a victory parade, after the celebrated leader helped troops win a pivotal battle. It took the whole tribe to win the victory, of course, but it was the leader&apos;s heroism and clarity under pressure that inspired them to overcome. The team is thrilled that the leader led them to victory. This card points to a time to let everyone relax and celebrate -- if you are the leader, let them applaud you. They are seeing their better selves reflected in you -- a victory indeed!',
      Advice: 'The Six of Wands in this position advises taking action on your most burning and passionate convictions, no matter what the social consequences. Continue to articulate and define yourself in light of the torch you are carrying. This inspires others to conceive some new ideas of their own. You may find yourself becoming something of a leader. Usually the first person to break away from conventional thought is the one to define a new trend. Under the circumstances, there is a solid need for a fresh voice and vision -- so make your move. Those around you who are ready for change will support your leadership.',
      Love: 'The Six of Wands in this position provides an opportunity for you and your love interest to be on the receiving end of strong support. An opinion you had been keeping to yourself spoke to a universal need. As you share your views, your potential partner can unite with you, volunteer to help and offer to provide a framework for your team. Your inspiration, enthusiasm and leadership are bearing fruit. It is imperative, however, that you design a plan of action -- don&apos;t allow a relationship team effort to plunge ahead without direction.',
      Career: 'When the Six of Wands is in this position, the situation may call for a charismatic individual who can sweep into the workplace, stir up the collective imagination, and inspire long term change. You may or may not be the one called to initiate the new project, but you do have an important role to play. Align yourself with the emerging leadership. Your concerns could be taken care of by the momentum of the larger movement. Progress can be realized once all of the group&apos;s energy is moving in the same direction.',
      YesOrNo: 'The Six of Wands is a card of victory. If you&apos;re looking for simple Yes or No guidance and receive the Six of Wands, the answer is YES. Think about everything you&apose;ve already achieved in this situation.',
      image: 'wa06.jpg'
   },
   {
    key: 'Seven of Wands',
    meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. The Seven of this suit generally shows a person who is nearly always successful in working his or her will in the world. This is a person who is truly gifted, standing head and shoulders above the rest. This person sets standards and sets examples that exceed previous conceptions of what is possible. In historical Tarot, this person would most likely be portrayed as an admired and feared warrior who has vanquished his adversaries against all odds. Such an outstanding feat could just as easily apply to the world of the media, politics or business. Beware of conceitedness that can be hinted at by this card. Being successful does not make you invincible, and it does not protect you against errors! Enjoy your "fifteen minutes of fame" and then get back to your tasks, or your head will swell, to the detriment of your ability to succeed again.',
    Advice: 'The Seven of Wands in this position tells you that the time for peak performance is now. Even if slightly unprepared, you may want to push yourself beyond your usual limits, thinking in larger terms and tweaking your competitive nature. Time and effort spent in preparation could pay off handsomely. You might be the one who vaults right over the heads of those who thought they could outdo you. Move beyond rhetoric and verbal challenges. Now could be the moment to prove what puts you head and shoulders above the rest by demonstrating it in action.',
    Love: 'The Seven of Wands in this position points to a personal breakthrough or a moment of triumph. You have done a lot of work on your ability to relate to others and are at the peak of your potential. You are a winner even if the proof hasn&apos;t manfested just yet. With such a positive attitude and strong potentials so carefully cultivated, you are bound to make a strong showing on behalf of you and someone you care about.',
    Career: 'When the Seven of Wands is in this position, a number of excellent players in your career or work environment may be challenging each other to reach their personal best. The excitement and stimulation of being cheered on by an enthusiastic audience means everybody is performing better than they ever thought they could. In this friendly competition, there are rewards for all coworkers who have participated. Clearly the greater good is enhanced by the enthusiasm of people who are committed to doing their best.',
    YesOrNo: 'The Seven of Wands is a card of defensiveness. If you&apos;re looking for simple Yes or No guidance and receive the Seven of Wands, the answer is NO. Think about how much you truly need to protect yourself in your current situation.',
    image: 'wa07.jpg',
     },
     {
      key: 'Eight of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. The Eight of this suit often shows a flight of spears or staffs moving through the air in formation, as if a hidden group of archers had let them fly all at once. This can refer to swiftly unfolding events, whether of unintentional or intentional design. There are also versions that emphasize the agricultural cycle, paralleling the yearly crop cycle with the swift growth of children into adults with children of their own. In each case, the emphasis is on the necessity of change and the challenge of keeping up with it. With the turning of the seasons, we are constantly being forced to deal with change and there is no remedy but to live with that in mind. So, get busy -- there is no time to waste!',
      Advice: 'With the Eight of Wands in this position, learn all you can from recent successful experiences. Take note of what worked before and what did not. You possess awareness as to how to effectively apply your imagination to shape the world in productive and aesthetic ways. Thus, the testament to your talents may be revealed for everyone to see and admire. Even if you had to leave it all behind, you know you could start all over among total strangers and succeed once again. This valuable self-confidence makes you free to strike out in new directions and not just cling to past successes and previous accomplishments.',
      Love: 'When the Eight of Wands is in this position, take some time to stand back like a skillful gardener to marvel at the rate things are growing. This card has a powerful traditional association with speed, exponential growth and the unleashing of an evolutionary process of change that could have far reaching, profound effects on your relationship. As you consider how swiftly things are developing, you will become concerned less about outcome and more about just keeping up. As your endeavor matures, it has the potential to absorb your attention, exceed your expectations and fulfill your vision. The call here is simply to follow through and nurture the abundance and joy you are creating, until they have a life of their own.',
      Career: 'The Eight of Wands in this position indicates that you may be running to keep up with career and work place decisions and circumstances which seem to have taken on a life of their own. Being proactive may be difficult right now. Stimulating events may demand too much of your attention right now. This is not to point out any weakness in the work place. Rather, you are simply caught up in a avalanche of cascading consequences. This can be an exciting and possibly exhausting time because the team spirit and cooperation will be tested at every level as the action plays out. It can take supreme effort to cope with unforeseen consequences, so keep your eye on the ball!',
      YesOrNo: 'The Eight of Wands is a card of focus and determination. If you&apos;re looking for simple Yes or No guidance and receive the Eight of Wands, the answer is YES. Remember your top priorities and work relentlessly toward them.',
      image: 'wa08.jpg',
     },
     {
      key: 'Nine of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. The Nine of this suit usually indicates a need for rest; some time out to mend wounds and savor victories. Although it may be hard to do, this card would have you leave the field to fresher teammates for now. Release any attachment you may feel to being in a leadership role for now. In the pictured Tarot decks, the protagonist is shown as too exhausted to be effective in defending his gains, yet resisting the suggestion to ask for help or step down. He or she hasn&apos;t had the chance to totally heal from past blows, and is still up there taking another beating. This is the fix that comes from making oneself irreplaceable. Fight off the maniacal thought that only you can save the day! Stop rejecting loved ones who want to help you.',
      Advice: 'When the Nine of Wands is in this position, you have done everything you can to bring a situation to a successful conclusion. The full range of possibilities has been exhausted and all the creative energy that is available has already been put to use. This may be a great time to lay down your concerns and enjoy a rest. There is nothing more to bring to the mission unless you regenerate and restore the energy you have put into the cause. While it is praiseworthy to give all you have for something or someone that means a lot to you, masochism and martyrdom are ill advised. Take a break. No one can fault you for it now.',
      Love: 'When the Nine of Wands is in this position, putting things off and giving yourself some space is important, although it may be psychologically difficult for you to do so. In situations where we think we are irreplaceable, we all too often neglect to give ourselves time to rest and recuperate. Try to remember that exhaustion impairs the ability to make good decisions, giving negative forces an opportunity to gain an advantage. For the sake of yourself and your partner, take a break!',
      Career: 'The Nine of Wands in this position suggests that work relationships may be calling for re-organization. If the current state of communication is stressful, it may damage the goodwill that had built up between the ranks. Everybody seems to be under duress, or at least that is the shared perception. Just because you think your boss, co-worker or customer is being grouchy and non-compassionate, there is no reason for you to become that way. The situation would be best served if the defined leadership took a back seat for awhile, riding along as passengers and taking note of what others can do. Without more trust in the workers, those leaders will alienate the very ones they depend upon. Instead of one person being the hero/oppressor, let everybody share both the responsibilities and the rewards.',
      YesOrNo: 'The Nine of Wands is a card of exhaustion. If you&apos;re looking for simple Yes or No guidance and receive the Nine of Wands, the answer is YES. Stay persistent -- your goal is in sight!',
      image: 'wa09.jpg',
     },
     {
      key: 'Ten of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. The Ten of this suit represents an all-out effort, an obsessive commitment to a task which demands everything you&apos;ve got. The person shown in decks with pictures is in no position to rest until he makes it inside the stout walls of the well-defended castle in the distance. If he fails, he will become prey for the highway robbers after dark. It doesn&apos;t matter that he&apos;s overloaded and underfed. With this card, you have to do whatever it takes to get to completion -- nothing can be allowed to interfere.',
      Advice: 'The Ten of Wands in this position advises you to remember the true, simple heart of your youth and all the idealism it held. Now may be the time to reach deep into yourself and identify your purest, most wholesome impulses. As you do this, allow your optimistic and honorable side to see what&apos;s good about the world. Look beyond the challenges, setbacks, disappointments and frustrations you tend to see so easily. As you reawaken your high minded inner child, you will refresh your daily life with a joyful purpose.',
      Love: 'When the Ten of Wands is in this position, it&apos;s clear that the path of action you have taken is ultimately not as important as the state of being it can produce. You are beginning to realize that what you have been pursuing -- such as your romantic and relationship goals -- may actually be based on something internal, which when kindled and awakened actually replaces your need to seek satisfaction in the external world. This is not to invalidate all that you have been engaged in, because it has ultimately led you to this valuable realization. But when you assimilate what you are learning about Being, action will no longer seem as imperative. Take this opportunity to learn to meditate and find within what you previously looked for outside yourself.',
      Career: 'The Ten of Wands in this position suggests that this is a time of stability and security in your career or work place. Accordingly, this may offer you and coworkers an opportunity to rest on your laurels and contemplate your accomplishments. You may find that so settled a situation is somewhat resistant to transformation, even when change represents progress. Your recent surge of career-related creativity is winding down. Ambitions that once seemed boundless may now be better aimed towards conserving past gains. Your next assignment has yet to be discovered. Consider the likelihood that it will be found within you, rather than in the external work environment. Relax in this moment of serenity and appreciate how far you have all come, both individually and together.',
      YesOrNo: 'The Ten of Wands is a card of overwhelm. If you&apos;re looking for simple Yes or No guidance and receive the Ten of Wands, the answer is NO. Think carefully about your capacity and resist the urge to take on more than you can carry.',
      image: 'wa10.jpg',
     },
     {
      key: 'Page of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. This card is traditionally entitled the Page, but in some modern decks appears as a Princess. This archetype is that of a unique individual, a nonconformist, often something of a bohemian, definitely independent by nature. He or she requires little in the way of affirmation or approval. Perhaps a mischief-maker, often an innovator or inventor, the energy represented by this card will only serve others until he or she figures out how to get others to serve him/her. This person&apos;s freedom is so important they would rather go as a peasant among strangers than inherit a fortune with strings attached. Don&apos;t be fooled by this humble appearance. This person is a future captain of industry or world leader, now serving an apprenticeship. These people are sometimes seen planting a staff like a flagpole into the earth in the far off wilderness (where they can start fresh without having to make any compromises). You could think of this card as a wild card.',
      Advice: 'This card is traditionally entitled a Page, but in some modern decks as a Princess. In this position, this card suggests that you cannot know how to facilitate communication until you have studied your environment. Your task may be to blend into your surroundings so you can gather information and get a clear sense of what is going on around you. Think of yourself as a secret agent for the greater good. In due time, others may recognize the role you play in the transformation from divisiveness to unity. However, right now you are being asked to watch quietly from the sidelines.',
      Love: 'This card is traditionally entitled a Page, but in some modern decks as a Princess. When the Page of Wands is in this position, you play the part of a messenger who represents forward-moving change. A partner may seem unnerved by your influence because you may be disturbing his or her set, stable patterns. Don&apos;t take this discomfort personally. Those who are familiar with you know you to be a catalyst who is involved to instigate change. This may be the important role you are called upon to play in this possible relationship.',
      Career: 'When the Page of Wands (in some decks, a Princess) is in this position, change is in the air. News may have been released about developing events that may put stress on your comfortable, established work or career dynamic. It could represent a change in hierarchy, a new set of policies, or perhaps a turn of events that may catch you by surprise. Whatever it is, be prepared to participate in the wave of the future. Change will escalate quickly. This is not necessarily a negative development, so do not let anyone think this is something to get emotional or upset about. The essential thing to remember now is that you are to respond, rather than retreat and wait.',
      YesOrNo: 'The Page of Wands is a card of curiosity. If you&apos;re looking for simple Yes or No guidance and receive the Page of Wands, the answer is YES. Approach your next steps with a desire to learn.',
      image: 'wapa.jpg',
     },
     {
      key: 'Knight of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. This character is traditionally called the Knight, but in some modern decks appears as the Prince. Traditionally, this card indicates the energy of an instigator, a fire-starter, a feisty and easily provoked character who is liable to attack first and ask questions later. This energy is quick to anger and enjoys a fight -- so much so that the thought of a diplomatic solution can provoke a secret disappointment! Nevertheless, he sees himself as trying to help, rescuing the world from its madness by imposing his sense of order upon it. His vices are bossiness, paranoia and a tendency towards overkill. Nevertheless, there are times when his energy is perfectly appropriate, like when his assertively protective nature is defending threatened treasures or interfering with dark forces. The trick is to keep a sense of proportion when this Knight unleashes his fire, because he enjoys intense experiences and is always ready to take it to the next level. Once in awhile, this kind of intensity is called for, but on a daily basis it is exhausting.',
      Advice: 'The Knight of Wands (in some decks, a Prince) in this position advises that you modify your self-image in order to get a sense of yourself as a person of action. No matter what your past patterns have been, it is fully possible to place yourself solidly on the road toward the future. Not only can you get a clear sense of the proper path, but you will also have enough instructions to be self-directing. Necessary skills and resources are available to you, and the time is right for you to act. Once you get started, you may be surprised how easy it can feel, but don&apos;t be seduced by that feeling. There will be comfortable stretches of the road and there will be distinctly uncomfortable ones. Know that any form of motion is better than no motion.',
      Love: 'The Knight of Wands (in some decks, a Prince) in this position indicates readiness for a voyage of discovery for you and your possible love interest. You are prepared for the journey, your effects are in order, you are in great shape and the excitement of departure prevails. Inside there is a powerful feeling of youthful idealism -- you have no idea if this is going to be difficult or not, but those problems are tomorrow&apos;s problems. Today the energy is high, spirits are bright, the sky is clear and if there ever was a heroic and noble impulse in you, you are getting a chance to express it now.',
      Career: 'When the Knight of Wands (in some decks, a Prince) is in this position, someone in your career or work environment may be launched into their dream. The situation feels poignant and bittersweet to you. You realize how joyful and important an occasion it is. Still, you see how likely it is that the shiny new armor will soon be dented, the husky horse will become tired, and the optimism of youth tempered by some difficult trials. Virginal innocence has not yet met an adversary, and that&apos;s a beautiful thing. Still, it deserves to be celebrated and supported no matter how more seasoned eyes might envision the eventual outcome.',
      YesOrNo: 'The Knight of Wands is a card of flow and elegance. If you&apos;re looking for simple Yes or No guidance and receive the Knight of Wands, the answer is YES. Embrace any creative inspiration that comes your way.',
      image: 'wakn.jpg',
     },
     {
      key: 'Queen of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. Traditionally, representing the energy of a Queen, this woman represents the natural manager, whose gift is to inspire teamwork and divvy up tasks. She is the one who sees ensures everything runs smoothly. She&apos;ll be sweating in the sun along with her family or crew, inspiring everybody to keep up and supporting morale with her infectious energy. She is the best kind of manager to have, because she is like a challenging but encouraging mother, who knows you have it in you. She believes in her charges and they work hard to please her. She is not, however, sentimental. Like a good farmer, she views her crops, her animals, even the people who work for her, as necessary resources for the achievement of the higher goal. If any aspect is no longer productive or cost-effective, she can let them go without a second thought. Do not look to her for sympathy.',
      Advice: 'The Queen of Wands in this position reveals a need to hold your place in the chain of command and respect the hierarchy (at least for now). This may not be a time for you to be at the helm, even if you are motivated by a strong dedication to completing a project or overcoming a challenge. A perceived deficiency in leadership may make you want to take hold of the reins, but don&apos;t do it! Restrain yourself and remain loyal to your higher-ups. Stay focused and energetic. Enthusiastically confront the challenges directly in front of you. Perform in good faith and encourage others to do the same',
      Love: 'When the Queen of Wands is in this position, you are like an engaged manager who not only wants to be aware of everything that&apos;s going on, but also wants to direct things. The Queen of Wands has an active and energetic nature. She is goal-oriented and practical. Some Tarot decks portray her as a farm wife who is busy all day long, overseeing any number of activities related to raising and educating children as well as taking the crops to market. Like the queen of the operation, perhaps you also have your hands full -- serving as the axis of production and contentment. It can be a joyful experience to contribute so much to your relationships.',
      Career: 'When the Queen of Wands falls in this position, a motherly, take charge force in the workplace may be managing and organizing all the players. This feminine symbol represents a persuasive and emotionally available style as opposed to more forceful, traditionally masculine methods. The Queen&apos;s managerial influence is inducing good behavior by holding a high standard and embodying it. It urges everyone else to make his or her best efforts. It is true that manipulation exists to some extent since the Queen&apos;s style brooks no opposition. She is a zealous worker who may overshadow the efforts of others, but she also inspires people to do their best work',
      YesOrNo: 'The Queen of Wands is a card of charisma. If you&apos;re looking for simple Yes or No guidance and receive the Queen of Wands, the answer is YES. Follow your heart as you navigate your present circumstances.',
      image: 'waqu.jpg',
     },
     {
      key: 'King of Wands',
      meaning: 'This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking. Traditionally representing the energy of a dynamic King, this card represents the classic conquering hero. He&apos;s a charismatic leader, entrepreneurial and ambitious, always creating new adventures. He does this because he doesn&apos;t like to stay home or to have to "mind the store" -- he gets to feeling restless and bored with the predictable. If you need a crusader, or someone to take on a big challenge, he&apos;s your man. He needs a big assignment, and would rather lead than follow. It could be said that he has a bit of an ego, as evidenced in his enjoyment of flattery and praise. A bit of a performer, he overachieves in situations where it will be noticed, but in private he wants to be served and adored like the head lion of a pride. A benevolent dictator, he makes life wonderful for those he loves and just the opposite for those who displease him.',
      Advice: 'The King of Wands in this position reminds us that our lives are designed to bring us eventually to a place of self-ownership. An opportunity for self-empowerment is presenting itself to you now. Recognize that through your attitude and the way you express yourself to others, you hold the power over your own experiences in life. You are the determining factor in this situation and circumstances will proceed in the direction that you steer them. Indecision or doubt are not appropriate responses when clarity and confidence are critical. As you take on a bigger role, it will begin to feel more comfortable. Seize the opportunity to influence events, because everything is waiting for you',
      Love: 'The King of Wands in this position shows you projecting a sense of authority and security that can rightfully inspire appreciation and gratitude. This is your time to shine and for your relationship capabilities to be recognized. This king is sometimes interpreted as autocratic, however, so strive to be objective and open-minded. Avoid offending others who may feel jealous. Remember that everything is cyclical and passes through seasons of change. The sense of serenity felt at the top is no guarantee that the high-ranking position will last. Stay balanced and use power wisely to set a good example for those who will follow in your footsteps.',
      Career: 'The King of Wands in this position suggests that a new level of authority may have been assumed by someone in the work environment. That person may still be getting used to this new position. Your patience and compassion can help them get their bearings. It is not in your best interests to appear competitive, so lend your support humbly. Resist the temptation to upstage this person even if it would be easy. Think of the long run and the greater good. You will be most influential in the outcomes if you are known as a valuable team member rather than an adversary!',
      YesOrNo: 'The King of Wands is a card of mentorship and respect. If you&apos;re looking for simple Yes or No guidance and receive the King of Wands, the answer is YES. Recognize how much power and influence you wield in this situation.',
      image: 'waki.jpg',
     },
     {
      key: 'Ace of Cups',
      meaning: 'The Ace of Cups reversed warns of a loss of self-esteem, optimism and faith in the abundance that the universe has to offer. Stop to examine what it is that is causing you to lose altitude. It might be the mental food you are feeding yourself. It could be that you are putting too much attention on the outer circumstances and not enough on the nurturing energy that is available to you. Retreat and become harmonious within yourself, until you feel love and trust returning. Reclaim your faith in the abundance of the universe. Make no moves or decisions until you have cleansed yourself of any pessimism and negativity that are haunting you at this time.',
      Advice: 'The Ace of Cups in this position advises you to challenge yourself and discover what is good about every relationship. Practice looking at the world through the eyes of the Divine. Allow your imagination to perceive the spiritual or evolutionary potential in every person and experience. Look with the eye of a loving parent or companion upon the people and things you come into contact with. Make a conscious decision to approve of and delight in even the quirky developments that make the world turn. No one can be perfect at such unconditional acceptance. Still the practice will sweeten your day to day life. Your magnetism will increase and more loving people may enter your life. The whole world will benefit as this becomes second nature to you.',
      Love: 'When the Ace of Cups is in this position, you may be realizing abundance, emotional security, bonding, comfort, self-love, romantic love or a love for the world. This card signifies a fountain of nurturing and support that we have inside our hearts. Those who are mystically inclined may think of it as coming from God or a Higher Self. Others may see it as springing forth from those around us. In any case, it&apos;s an unfailing source of comfort, support and optimism that portrays the world as good and beautiful, providing plenty for you and your upcoming relationship. This fountain of love pours over everything in your life.',
      Career: 'The Ace of Cups in this position shows that you may have discovered an environment permeated with kindness, well-being and support. There is a feeling of abundance in the air. Everyone is looking after one another in a respectful and encouraging way. Although this situation may be astonishing compared to what you are used to, embrace it. Allow it to nurture you at your workplace. This is a friendly, safe and lovely environment. Relax and enjoy it while it prevails.',
      YesOrNo: 'The Ace of Cups is a card of tenderness. If you&apos;re looking for simple Yes or No guidance and receive the Ace of Cups, the answer is YES. Act with integrity and be as caring as possible in your interactions with others.',
      image: 'cuac.jpg',
     }            
]

function callData(CardName) {
 const Datas = myCards;
  const selectedItem = Datas.find(item => item.key === CardName);
  
  console.log(selectedItem);
  if (selectedItem) {
    logArrayItems(selectedItem);
  } else {
      console.log('This card is not in the array');
      
  }
  }
  function logArrayItems(ExtraItems) {
      const FirstExtra = document.getElementById('ExtraOne');
      let inside = `<h4>Meaning of card for you: </h4> <p>${ExtraItems.meaning}</p> <h4>Here is advise for you: </h4><p>${ExtraItems.Advice}</p> `
      FirstExtra.innerHTML = inside;
  }
  
  function getRandomItems(arr, numItems) {
      const shuffledArray = arr.sort(() => 0.5 - Math.random()); 
      return shuffledArray.slice(0, numItems); 
  }


  function CardCategory(SelectCard) {
      console.log(SelectCard);
      const randomItems = getRandomItems(myCards, 15);
      const lastCards = document.getElementById('TarotCards');
      const articles = document.getElementById('article');
      const links = document.getElementById('Lins');
      const wishlist = document.getElementById('CardByCategory');
      lastCards.style.display = 'none';
      articles.style.display = 'none';
      links.style.display = 'none';
      wishlist.style.display = 'block';
       console.log(randomItems); 
       wishlist.innerHTML = ''
      let insideWish = `<h3>Please pick one of the cards below</h3> <figure>`
       randomItems.forEach((items, index) => {
          console.log(items);
          
          insideWish += `<img onclick="PickWishCard('${items.key}', '${SelectCard}')" src="../assets/images/Astrology/tarot/071212ece1e6ffedace00cf6cb3a30d8.jpg" alt="">`
       });
       insideWish += `</figure>`
      wishlist.innerHTML = insideWish;
  }

  function PickWishCard(PickedRecived, Category) {
      console.log(PickedRecived);
      const findCard = myCards;
      console.log(findCard);

      const selectCard = findCard.find(item => item.key === PickedRecived);
      console.log(selectCard);
      let Generated = '';
    if (Category === 'Love') {
      Generated = selectCard.Love;
    } else if (Category === 'Career') {
      Generated = selectCard.Career;
    } else if (Category === 'Education') {
      Generated = selectCard.Education;
    } else if (Category === 'Love') {
      Generated = selectCard.Love;
    } else if (Category === 'YesOrNo') {
      Generated = selectCard.YesOrNo;
    } else if (Category === 'Advice') {
      Generated = selectCard.Advice;
    }
      
      const CardWished = document.getElementById('WishCards');
      const wishlistTo = document.getElementById('CardByCategory');
      wishlistTo.style.display = 'none';
      CardWished.style.display = 'flex';
      CardWished.innerHTML = '';
       let insideCardWish = `<img src="../assets/images/Astrology/tarot/${selectCard.image}" alt="">
       <article>
           <h5>The meaning of the card you chosed is as follows</h5>

           <p>${Generated}</p>
       </article>`
      CardWished.innerHTML = insideCardWish;
      
  }
  
  async function PickCard(cards) {
      const pickedCard = cards;
      try {
        const response = await fetch(`https://tarotapi.dev/api/v1/cards/${pickedCard}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
    
        const PickDa = await response.json();
        
        console.log(PickDa.card.name);
        pickedCardData(PickDa)
        callData(PickDa.card.name)
        return PickDa;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
    
  function pickedCardData(recivedPicked) {
      console.log('Recived: ' + recivedPicked.card.name);
      const recData = recivedPicked.card;
      const singleC = document.getElementById('singleCard');
      const lastCards = document.getElementById('TarotCards');
      const articles = document.getElementById('article');
      const links = document.getElementById('Lins');
      lastCards.style.display = 'none';
      articles.style.display = 'none';
      links.style.display = 'none';
      singleC.innerHTML = '';
      newTypeWrite(recData.name, recData.desc, recData.meaning_up, 60);
  
      let insidesingleC = `<img src="./../assets/images/Astrology/tarot/${recData.name_short}.jpg" alt="">`
       singleC.innerHTML = insidesingleC;
  
       const Counter = Number(Count) + 1;
       sessionStorage.setItem('Tarot', Counter);

       console.log('Counter is:' + Counter);
       
      }
    
  
  async function fetchTarotCards() {
      try {
        const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=6');
        
  
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
          const data = await response.json();
  
        console.log(data);
        displayCard(data)
        
        return data;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
    
    fetchTarotCards();
  
    function displayCard(items) {
      if (Count < '1') {
        typewriter('Welcome to our Tarot Card Reading page, where the wisdom of the cards awaits to guide you on your journey. Whether you are seeking answers, insight, or a deeper connection to the mysteries of life, you are in the right place. Each card holds a story, and within these stories lie the keys to understanding the paths before you. Take a moment, clear your mind, and pick one of the cards below to let the cards reveal the guidance you seek. or chooce one of the these categories: ', 20);
        
      } else if (Count >= '1') {
        typewriter('So let try again. But I suggest not using tarot cards more than once a day. Now clear your mind, and pick one of the cards below to let the cards reveal the guidance you seek. or chooce one of the categories below: ', 20);
      } 
      
      
      const listCards = document.getElementById('TarotCards');
  
      listCards.innerHTML = '';
  
      let insideCards = `<figure>`
          
      items.cards.forEach((cardI, index) => {
  
        insideCards += `<img onclick="PickCard('${cardI.name_short}')" src="./../assets/images/Astrology/tarot/2fa3ca4c5014e1ac1799a094c90e2c78.jpg" alt="">`
  
      });
      insideCards += `</figure>`
      listCards.innerHTML = insideCards;
  
    
     
  
    }
    
    
  
  async function fetchMinorTarotCards() {
      try {
  
        const response = await fetch('https://tarotapi.dev/api/v1/cards');
        
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const data = await response.json();
        
        const minorCards = data.cards.filter(card => card.type === 'minor');
        
        console.log('Minor: ' + minorCards);
        
        
        return minorCards;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
    
    fetchMinorTarotCards();
    
  
  
  async function fetchTarotCardsByMeaning() {
      try {
        const response = await fetch('https://tarotapi.dev/api/v1/cards/search?meaning=peace');
        
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const data = await response.json();
    
        if (Array.isArray(data.cards)) {
          data.cards.forEach(card => {
            console.log(`Name: ${card.name}`);
            console.log(`Type: ${card.type}`);
            console.log(`Description: ${card.desc}`);
            console.log('------------------------');
          });
        } else {
          console.error("The data doesn't contain an array of cards.");
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
    
    fetchTarotCardsByMeaning();
    
  
  
  function typewriter(text, speed) {
      let index = 0; 
      const container = document.getElementById('paraf'); 
  
      function type() {
          if (index < text.length) {
              container.textContent += text.charAt(index); 
              index++; 
              setTimeout(type, speed); 
          }
      }
  
      type(); // Start typing
  }
  
  
  
  function newTypeWrite(title, firstP, secondP, Speed) {
      console.log("tit:" + title);
      
      let index = 0; 
      let index2 = 0;
      let index3 = 0;
      const tite = document.getElementById('titl');
      const firstPar = document.getElementById('firstP');
      const secondPar = document.getElementById('secondP'); 
  
      function write() {
          if (index < title.length) {
              tite.textContent += title.charAt(index); 
              index++; 
              setTimeout(write, Speed); 
          }
          if (index2 < firstP.length) {
              firstPar.textContent += firstP.charAt(index2); 
              index2++; 
              setTimeout(write, Speed); 
          }
          if (index3 < secondP.length) {
              secondPar.textContent += secondP.charAt(index3); 
              index3++; 
              setTimeout(write, Speed); 
          }
      }
  
      write(); // Start typing
  }
  