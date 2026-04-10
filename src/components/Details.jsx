import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importa useParams para leer la URL y useNavigate para redirigir
import "../styles/details.css";
// Define la data de tus artículos directamente en este componente.
const articlesData = [
    {
        id: '1',
        title: 'Why Homework and Study Matter: Keys to Academic Success',
        subtitle: 'Discover how doing homework and studying regularly can improve school performance and build lifelong skills.',
        author: 'CREAR News Team',
        category: 'Announcements',
        tags: ['homework', 'studying', 'academic habits', 'student life', 'learning'],
        slug: 'why-homework-and-study-matter',
        imageUrl: 'https://i.pinimg.com/originals/4e/9d/87/4e9d87f8022d47f7cae6012efc96bb82.gif',
        inArticleImageUrl: 'https://i.pinimg.com/736x/52/1e/13/521e13d1d80787d1105eb6004e7e9f7b.jpg', // Second image
        date: 'June 19, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Homework and studying are essential parts of student life. While some students may not always enjoy them, they play a big role in helping learners understand new topics, prepare for tests, and become responsible individuals. Doing homework and reviewing lessons at home is more than just a task—it’s an important habit that leads to better academic results and a deeper understanding of subjects.</p>
            <p class="details-page-paragraph">From elementary school to high school, students are expected to practice what they learn in class. Homework reinforces learning and gives students time to think about what they studied during the day. It helps them discover their doubts, practice key concepts, and develop skills like time management, independence, and responsibility.</p>
            <h3 class="details-page-heading">📚 Reinforcing Knowledge Outside the Classroom</h3>
            <p class="details-page-paragraph">Learning doesn’t end when the school bell rings. Homework allows students to continue the learning process at home. By solving problems, reading, or writing at home, students can strengthen what they learned in class and improve their memory. When students review lessons regularly, they are more likely to retain information and feel confident during exams.</p>
            <p class="details-page-paragraph">For example, practicing math problems at home can help students better understand formulas. Reading stories or articles improves vocabulary and reading comprehension. Writing essays allows them to express their thoughts more clearly and develop writing skills.</p>
            <h3 class="details-page-heading">📝 Studying Smart: Preparing for Exams</h3>
            <p class="details-page-paragraph">Exams are a part of every student’s academic journey. Studying helps students prepare and feel ready for these challenges. Without proper study habits, even intelligent students can struggle in tests. Studying regularly reduces stress, improves focus, and leads to higher scores.</p>
            <p class="details-page-paragraph">Students who study a little bit every day often perform better than those who try to memorize everything the night before. This method, called "spaced repetition," helps the brain absorb and store information more effectively. Creating flashcards, reviewing class notes, and testing oneself are great techniques to study smarter, not harder.</p>
            <img src="https://i.pinimg.com/736x/52/1e/13/521e13d1d80787d1105eb6004e7e9f7b.jpg" alt="Student studying with books" class="details-page-in-article-image" loading="lazy" />
            <h3 class="details-page-heading">⏳ Building Discipline and Responsibility</h3>
            <p class="details-page-paragraph">Doing homework regularly also helps students develop important life skills. Time management is one of them. Knowing how to plan time between school, homework, and personal activities is a valuable skill for the future. Completing homework on time teaches responsibility and builds confidence in students’ abilities.</p>
            <p class="details-page-paragraph">Additionally, when students complete their tasks without being reminded, they feel proud of their work. It teaches them the value of consistency and discipline. These are skills that not only help in school but also in future jobs and everyday life.</p>
            <p class="details-page-paragraph">
                <strong><a href="https://www.youtube.com/watch?v=your-video-id" target="_blank">Watch this video</a></strong> on effective study tips.
            </p>
            <h3 class="details-page-heading">🎯 Conclusion: Strong Habits Lead to Strong Results</h3>
            <p class="details-page-paragraph">Homework and studying are not just tasks from teachers—they are tools for success. When students make these practices part of their routine, they gain more than good grades. They become more organized, confident, and prepared for the future.</p>
            <p class="details-page-paragraph">So remember, even a few minutes of homework or review each day can make a big difference. Good habits today build great achievements tomorrow!</p>
            <hr class="details-page-hr"/>
        `,
        // Summary for footer
        summary: `Homework and studying are crucial for academic success, reinforcing knowledge, preparing for exams, and building essential life skills like time management and responsibility. Consistent effort in these areas leads to better understanding, improved performance, and increased confidence, ultimately preparing students for future success.`
    },
    {
        id: '2',
        title: 'The Importance of Rest: Why Students Need Vacation Time',
        subtitle: 'Vacations aren\'t just breaks—they are essential for mental health, personal growth, and better academic performance.',
        author: 'CREAR News Team',
        category: 'Lifestyle',
        tags: ['vacation', 'student life', 'rest', 'productivity', 'wellbeing'],
        slug: 'why-students-need-vacation-time',
        imageUrl: 'https://i.pinimg.com/originals/a4/b0/fd/a4b0fd45c9210a9ed78f7b034159c0ea.gif',
        inArticleImageUrl: 'https://i.pinimg.com/736x/81/a1/99/81a1997dbb1ff7ecbfcf2e6aced0295f.jpg', // Second image
        date: 'June 18, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Vacations are more than just free time. For students, they provide a much-needed break from academic pressure and allow time to recharge mentally, emotionally, and physically. Rest is a vital part of the learning process, and taking time off can actually improve focus, motivation, and performance once school resumes.</p>
            <p class="details-page-paragraph">In our busy academic routines, students often feel overwhelmed by homework, projects, and exams. This constant pressure can lead to stress and even burnout. Vacations offer the opportunity to relax, explore new interests, and spend quality time with family and friends—activities that contribute to a balanced and healthy lifestyle.</p>
            <h3 class="details-page-heading">🌞 Mental and Emotional Recharge</h3>
            <p class="details-page-paragraph">Resting the brain is as important as exercising it. Vacations give students time to step away from responsibilities and allow the brain to process information learned during the semester. Breaks help reduce anxiety, improve mood, and refresh energy levels. A well-rested student is more likely to return to school with better attention and a positive attitude.</p>
            <p class="details-page-paragraph">Taking time off also strengthens emotional health. Being free from deadlines and performance pressure allows students to enjoy the present moment, reflect on their experiences, and set new personal goals.</p>
            <img src="https://i.pinimg.com/736x/81/a1/99/81a1997dbb1ff7ecbfcf2e6aced0295f.jpg" alt="Students relaxing on vacation" class="details-page-in-article-image" loading="lazy" />
            <h3 class="details-page-heading">🏕️ Building Life Skills Through Free Time</h3>
            <p class="details-page-paragraph">Vacations aren’t just about doing nothing—they’re a chance to grow in different ways. Students can take up hobbies, travel, read, or even help at home. These experiences build creativity, responsibility, and confidence.</p>
            <p class="details-page-paragraph">Learning outside the classroom is just as valuable. For example, helping plan a family trip can teach organization and budgeting. Reading for fun improves language skills. Playing sports or music develops discipline and perseverance.</p>
            <h3 class="details-page-heading">💡 A Balanced Life = Better Learning</h3>
            <p class="details-page-paragraph">Rest and learning go hand in hand. When students return to school after a vacation, they tend to be more focused, motivated, and enthusiastic. Their minds are clearer, and they are better prepared to absorb new knowledge.</p>
            <p class="details-page-paragraph">By recognizing the value of rest, schools and families can support students in building healthy habits that will benefit them throughout their lives. Encouraging rest and recreation is not a waste of time—it’s a wise investment in well-being and future success.</p>
            <p class="details-page-paragraph">So, take that break, enjoy your time, and come back stronger. Because rest is not just a pause—it's part of the process.</p>
            <hr class="details-page-hr"/>
        `,
        summary: `Taking breaks is essential for students. Vacations help recharge the brain, reduce stress, and allow space for personal growth. With balanced rest and recreation, students return to school more focused, motivated, and ready to succeed.`
    },
    {
        id: '3',
        title: 'The Rise of AI in Education: Opportunities and Challenges',
        subtitle: 'How artificial artificial intelligence is transforming learning and what it means for students and teachers.',
        author: 'Tech Innovators Group',
        category: 'Technology',
        tags: ['AI', 'education', 'technology', 'future of learning'],
        slug: 'ai-in-education',
        imageUrl: 'https://i.pinimg.com/originals/59/34/6b/59346b4b5c80cc5cf0c483a27dfdcb36.gif',
        date: 'June 17, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Artificial intelligence is rapidly changing many aspects of our lives, and education is no exception. From personalized learning platforms to automated grading, AI offers exciting opportunities to enhance the learning experience.</p>
            <p class="details-page-paragraph">However, with these opportunities come challenges. Ensuring equitable access to AI tools, maintaining human connection in the classroom, and addressing ethical concerns are crucial as we integrate AI into educational settings.</p>
            <img src="https://i.pinimg.com/736x/8e/71/61/8e71618a8d16719e78262a4d93f77341.jpg" alt="AI in education" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">AI can help teachers identify student learning gaps, provide immediate feedback, and even create custom learning paths. For students, it can offer 24/7 tutoring, access to vast amounts of information, and tools for creative expression.</p>
            <p class="details-page-paragraph">As we move forward, a balanced approach is necessary. AI should be seen as a tool to assist and augment, not replace, human teachers. The goal is to leverage AI's power to create more effective, engaging, and accessible educational environments for everyone.</p>
            <div class="details-page-footer-content">
                <p><strong>Author:</strong> Tech Innovators Group</p>
                <p><strong>Category:</strong> Technology</p>
                <p><strong>Published:</strong> June 2025</p>
                <p class="details-page-tags"><strong>Tags:</strong> AI, education, technology, future of learning</p>
            </div>
        `,
        summary: `Artificial intelligence is rapidly changing many aspects of our lives, and education is no exception. From personalized learning platforms to automated grading, AI offers exciting opportunities to enhance the learning experience.`
    },
    // NUEVA NOTICIA 1: Mascota de Primaria
    {
        id: '4',
        title: 'My Friend Noah',
        subtitle: 'A sweet story about a special friend from one of our youngest students.',
        author: 'Martin Moreno Uriza, 2° Grade',
        category: 'Primary',
        tags: ['pets', 'dogs', 'students'],
        slug: 'my-friend-noah',
        imageUrl: 'https://i.pinimg.com/originals/21/e2/98/21e2982f65a7b5b5a9a1b77ec87042e2.gif',
        inArticleImageUrl: null,
        date: 'July 31, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">This is Noah. He is a Dog. He is big and brown. Noah is three years old. He has a favorite toy, a blue ball. Noah is my friend. I love Noah.</p>
            <div class="video-container">
              <iframe src="https://streamable.com/e/4ww2yo?autoplay=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe>
            </div>
        `,
        summary: `A student from 2nd grade writes about his best friend, a big, brown, three-year-old dog named Noah.`
    },
    // NUEVA NOTICIA 2: Historieta
    {
        id: '5',
        title: 'A Day at CREAR: A Comic Strip',
        subtitle: 'An illustrated look at school life through the creative eyes of a 7th grader.',
        author: 'Mariana Valentina Gutiérrez, 7° Grade',
        category: 'Creative Corner',
        tags: ['comic', 'art', 'school life'],
        slug: 'a-day-at-crear-comic',
        imageUrl: 'https://i.pinimg.com/originals/8b/70/4f/8b704f5e6a201423a676c96f8937d3c6.gif',
        inArticleImageUrl: 'https://i.pinimg.com/736x/a1/b5/63/a1b563c20b3272e694004fdef79f5269.jpg',
        date: 'July 30, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Here’s a creative comic that captures a day at school, filled with fun adventures and moments of friendship in the hallways of CREAR. We hope you enjoy reading it!</p>
            <img src="https://i.pinimg.com/736x/a1/b5/63/a1b563c20b3272e694004fdef79f5269.jpg" alt="Comic strip from student" class="details-page-in-article-image" loading="lazy" />
        `,
        summary: `Mariana from 7th grade shares a creative comic strip depicting a day at school, filled with fun adventures and moments of friendship.`
    },
    // NUEVA NOTICIA 3: Table Tennis
    {
    id: '6',
    title: 'CREAR Table Tennis Championship',
    subtitle: 'Highlights from the exciting matches and the champion of our latest tournament.',
    author: 'María Paula Mancipe, 7° Grade',
    category: 'Sports',
    tags: ['table tennis', 'sports', 'championship'],
    slug: 'table-tennis-championship',
    imageUrl: 'https://i.pinimg.com/originals/f2/3a/e7/f23ae77896d13766dff89e573caa20b9.gif',
    inArticleImageUrl: 'https://i.pinimg.com/originals/f2/3a/e7/f23ae77896d13766dff89e573caa20b9.gif',
    date: 'July 29, 2025',
    fullArticleText: `
        <p class="details-page-paragraph">Hello guys, how are you, i know that many of you play this sport even if you don´t know many important things and aspects about it.</p>
        <p class="details-page-paragraph">Believe me, it is very difficult for me to cover and explain everything about this beautiful sport, it would even be impossible for me to teach you how to play very well, but just read this article and get some information that can help you improve a little bit.</p>
        <p class="details-page-paragraph">First of all, Table tennis is much more than hitting a ball with a racket. It's a sport of quick reflexes, concentration, and strategy. Every point is a mental and physical battle.</p>
        <p class="details-page-paragraph">Table tennis also requires a good physical and mental preparation. Professional players train for hours to improve their technique, reaction time, and concentration. Matches may seem short, but they require intense effort and a great deal of tactical intelligence.</p>
        <img src="https://i.pinimg.com/736x/18/72/1c/18721c19219fc5d5c032cc7817644863.jpg" alt="Table tennis shots" class="details-page-in-article-image" loading="lazy" />
        <h3 class="details-page-heading">Basic Table Tennis Shots</h3>
        <p class="details-page-paragraph">Drive (flat shot or attack shot)</p>
        <p class="details-page-paragraph">This is one of the most common shots. It is performed by pushing the ball forward with the paddle slightly tilted. It can be performed with a forehand drive (forehand drive) or a backhand drive (backhand drive).</p>
        <p class="details-page-paragraph">Ideal for keeping the ball in play at medium speed.</p>
        <img src="https://i.pinimg.com/originals/4e/b7/b7/4eb7b7f103f9e0e73bcbc67154443a19.gif" alt="Table tennis shots" class="details-page-in-article-image" loading="lazy" />
        <h3 class="details-page-heading">Topspin</h3>
        <p class="details-page-paragraph">This is an offensive shot that causes the ball to spin forward (top spin). When hitting, the paddle is moved from bottom to top. This causes the ball to bounce and rise quickly, making it difficult for the opponent to respond.</p>
        <h3 class="details-page-heading">Backspin (chop)</h3>
        <p class="details-page-paragraph">This is a defensive shot that spins the ball backward (slice). This is performed by moving the paddle from top to bottom. This causes the ball to drop quickly when bouncing, making it difficult for the opponent to attack.</p>
        <h3 class="details-page-heading">Block</h3>
        <p class="details-page-paragraph">This is a technique for returning a fast ball without hitting hard. The paddle is placed firmly in front of the ball. It's very useful for defending against an opponent's topspin and returning with control.</p>
        <h3 class="details-page-heading">Serve</h3>
        <p class="details-page-paragraph">This is the shot that starts each point. It can have different effects: flat, with topspin, with backspin, or with sidespin. A good serve can confuse your opponent and give you an advantage from the start of the point.</p>
        <p class="details-page-paragraph">Today, table tennis is played all over the world, both recreationally and competitively. Countries such as China, Japan, Germany, and South Korea have a long tradition in this sport. In Latin America, nations such as Brazil, Argentina, and Colombia have had important representatives in international tournaments.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfZEyYzFUb1BdNJAwDGEX1gLlpPUd3-I7Wg&s" alt="Table tennis shots" class="details-page-in-article-image" loading="lazy" />
        <h3 class="details-page-heading">Why are basic strokes important?</h3>
        <p class="details-page-paragraph">Mastering the basic strokes is essential for any player, whether beginner or professional. These strokes allow you to control the ball, maintain the rhythm of the game, and build strategies for attacking or defending. Each stroke has a specific function and is used depending on the match situation.</p>
        <h3 class="details-page-heading">Fun Facts</h3>
        <p class="details-page-paragraph">In professional table tennis, the ball can spin up to 150 times per second with a good topspin! Some players use spin combinations to deceive their opponents, such as double-spin serves (for example, backspin and sidespin at the same time). Although it may seem like an easy sport because of the small table, reflexes must be almost as fast as in boxing!</p>
        <h3 class="details-page-heading">Author profile</h3>
        <p class="details-page-paragraph">Name: María Paula Mancipe L<br>Grade: Seventh grade<br>Age: 12 years old<br>I play Table tennis and i think it is a very beautiful sport.</p>
        <p class="details-page-paragraph">Thank you for reading this article and I hope I can do many more to continue talking about this beautiful sport called table tennis to try to help you understand more and more important things about this sport.</p>
        <p class="details-page-paragraph">See you next time</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwCMo0rpXO3-cxtUBC0m1Dg_rT9m0RY5EaQ&s" alt="Table tennis shots" class="details-page-in-article-image" loading="lazy" />
        
    `,
    summary: `A recap of the thrilling CREAR table tennis championship. The article highlights the exciting matches and celebrates María Paula Mancipe, the tournament winner, for her impressive skill and sportsmanship.`
},
    // NUEVA NOTICIA 4: Video de Cocina
    {
        id: '7',
        title: 'Cooking Corner: How to Prepare a Lemonade',
        subtitle: 'Chef Ángel shows us how to make a refreshing lemonade for a sunny day.',
        author: 'Ángel Tomás González, 7° Grade',
        category: 'Cooking',
        tags: ['recipes', 'cooking', 'tutorial'],
        slug: 'how-to-prepare-a-limonade',
        imageUrl: 'https://i.pinimg.com/originals/a3/1f/8d/a31f8de21dbb5eb14e32a409cc525d68.gif',
        inArticleImageUrl: null,
        date: 'July 28, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">¡Hi everyone! In this video, you’ll learn how to make a delicious and refreshing lemonade. It’s the perfect drink for a hot day and super easy to make. You only need a few ingredients and you’ll be ready to enjoy it!</p>
            <div class="video-container">
              <iframe width="560" height="315" src="https://streamable.com/e/nldn8j?" title="Placeholder Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `,
        summary: `Ángel Tomás González from 7th grade presents a cooking tutorial on how to prepare a simple and refreshing lemonade. The video provides a step-by-step guide on making the perfect drink for a warm day.`
    },
    // NUEVA NOTICIA 5: Animación
    {
        id: '8',
        title: 'Student Spotlight: Creative Animation by Sara',
        subtitle: 'A visually stunning animation created by our talented student, Sara Daniela Pineda.',
        author: 'Sara Daniela Pineda, 7° Grade',
        category: 'Arts & Culture',
        tags: ['animation', 'creative', 'art'],
        slug: 'creative-animation-sara',
        imageUrl: 'https://i.pinimg.com/originals/0a/d7/35/0ad735f722522d9a424b2a018ff63319.gif',
        inArticleImageUrl: null,
        date: 'July 27, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Sara Daniela Pineda from 7th grade surprises us with an amazing animation that showcases her great talent and creativity. Enjoy this animated short film, created with a lot of effort and dedication.</p>
            <div class="video-container">
              <iframe src="https://streamable.com/e/zjyz98?" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe>
            </div>
        `,
        summary: `A showcase of the creative talents of Sara Daniela Pineda, a 7th-grade student. The article features a short animation created by her, highlighting her hard work and artistic skills.`
    },
    // NUEVA NOTICIA 6
    {
        id: '9',
        title: 'The Crying Woman',
        subtitle: 'A story of myth and legend told by one of our students from fifth grade.',
        author: 'Aylin Bautista, Grado 5°',
        category: 'Myths & Legends',
        tags: ['myth', 'legend', 'story', 'horror'],
        slug: 'the-crying-woman',
        imageUrl: 'https://i.pinimg.com/736x/15/9c/a0/159ca059c7ce1cabf4e1084f33afba39.jpg',
        inArticleImageUrl: 'https://i.pinimg.com/736x/15/9c/a0/159ca059c7ce1cabf4e1084f33afba39.jpg',
        date: 'August 29, 2025',
        fullArticleText: `
            <img src="https://i.pinimg.com/1200x/a2/e4/0c/a2e40cb2a65c5550dbfc1ba1a92e2a3f.jpg" alt="The Crying Woman" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">ONCE UPON A DAY, A WOMAN DROWNED HER CHILDREN BECAUSE HER HUSBAND CHEATED ON HER WITH ANOTHER WOMAN.</p>
            <p class="details-page-paragraph">OVER TIME SHE REPENTED AND NOW WANDERS THE STREETS AT NIGHT, LOOKING FOR HER CHILDREN, SINGING: WHERE ARE MY CHILDRENNN.</p>
            <p class="details-page-paragraph">BY: Aylin Bautista- grado 5°</p>
        `,
        summary: `A chilling myth about a woman who wanders the streets looking for her children after an act of desperation, as told by a fifth-grade student.`
    },
    // NUEVA NOTICIA 7
    {
        id: '10',
        title: 'My Favorite Day',
        subtitle: 'A personal story about a fan meeting their favorite YouTuber, a day full of emotions.',
        author: 'Samaira Muentes, Grado 5°',
        category: 'Personal Stories',
        tags: ['concert', 'youtuber', 'favorite day', 'story'],
        slug: 'my-favorite-day',
        imageUrl: 'https://i.pinimg.com/736x/4c/8b/f6/4c8bf68008c268ab41a2b0380d07a19b.jpg',
        inArticleImageUrl: 'https://i.pinimg.com/736x/4c/8b/f6/4c8bf68008c268ab41a2b0380d07a19b.jpg',
        date: 'August 29, 2025',
        fullArticleText: `
            <img src="https://i.pinimg.com/736x/07/41/7e/07417e809c54ce801e429ff2128fa4f7.jpg" alt="Concert day" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">My favorite day is when I went to a concert of My favorite youtuber, in that morning I was nervous. The previous night I could not sleep. When I was in the concert I started to cry because I was super happy, when the concert started, I was very excited. The concert started at 7:30 and finished at 9:30 p.m. those two hours were the best of My life. And for that is My favorite day</p>
            <p class="details-page-paragraph">BY: Samaira Muentes- Grado 5°</p>
        `,
        summary: `A heartfelt account from a fifth-grade student about the best day of their life, spent at a concert of their favorite YouTuber.`
    },
    // NUEVA NOTICIA 8
    {
        id: '11',
        title: 'Why Do Women Take Longer When Shopping?',
        subtitle: 'An interesting theory about why women take longer to shop, based on ancient history.',
        author: 'Student, Grado 3°',
        category: 'Fun Facts',
        tags: ['shopping', 'history', 'fun facts', 'theory'],
        slug: 'why-women-take-longer-shopping',
        imageUrl: 'https://i.pinimg.com/736x/9f/fd/f4/9ffdf42744e5ce5c24782916f202278d.jpg',
        inArticleImageUrl: 'https://i.pinimg.com/736x/9f/fd/f4/9ffdf42744e5ce5c24782916f202278d.jpg',
        date: 'August 29, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">It turns out that in the past, men were in chage of meat... women were in chage of vegetables, because they had to think carefully since some could be poisonous and could endanger the family. it was very difficult to choose the right vegetables. for example a girl sees 3 yellow, red and purple grapes, then looks at 3 iguanas where 2 of them die, and discovers that the purple grapes are not poisonous and this knoledge has been passed down from generation to generation until 2023, our time.</p>
            <p class="details-page-paragraph">BY: Mathias Manjarrez- Grado 3°</p>
            <img src="https://i.pinimg.com/1200x/23/d1/6e/23d16ed54508a96b1ce879998aceb7bf.jpg" alt="Woman shopping" class="details-page-in-article-image" loading="lazy" />
        `,
        summary: `A theory from a third-grade student exploring the historical reasons behind why women might take longer when shopping, linking it to ancient food-gathering practices.`
    },
    {
        id: '12',
        title: 'VINTAGE CAPS',
        subtitle: 'Explore the history, culture, and value behind the vintage caps movement, from its origins in the 80s to the collector community in Colombia.',
        author: 'Laura Valentina Forero Ballesteros',
        category: 'Lifestyle',
        tags: ['vintage', 'caps', 'collectors', 'fashion', 'Colombia', 'hip-hop'],
        slug: 'vintage-caps-culture',
        imageUrl: 'https://i.pinimg.com/1200x/a4/a1/98/a4a198459016a5edbf71796753f93a1f.jpg',
        inArticleImageUrl: 'https://i.pinimg.com/1200x/a4/a1/98/a4a198459016a5edbf71796753f93a1f.jpg',
        date: 'August 30, 2025',
        fullArticleText: `
            <p class="details-page-paragraph">Have you ever been walking along the street and you have seen someone with a dirty and old cap and you have felt that you are in danger?</p>
            <p class="details-page-paragraph">Do you think that if that person wasn’t wearing that cap, you have felt more comfortable?… This kind of caps have a history behind that extravagant appearance.</p>
            <img src="https://i.pinimg.com/736x/3e/7b/a9/3e7ba9c850a1c5abec12709ec437d40e.jpg" alt="Person wearing a vintage cap" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">A lot of people wear caps in order to protect them of the sun, because they are sports team supporters, to make it outfit looks much better or only keeping an eye because the designs, brand or style.</p>
            <p class="details-page-paragraph">However, since 80’s until our days has showed up the vintage cap movement. People who love the classic style, ‘’treasure hunters’’ as they call themselves. This movement consists in a retro collection as any other collection, with the feature that those caps belong to sport teams, universities, athletes and cartoons. Which ones had a boom in 80’s and 90’s.</p>
            <img src="https://i.pinimg.com/736x/c3/55/53/c355539bee098bc398b61816dace0d1b.jpg" alt="Collection of vintage caps" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">Do you have any idea where these caps come from? Despite many people think these caps are manufactured just in the USA, they are kind of wrong. Cause maybe you don’t think so but they were also produce in South Korea, Philippines, Taiwan and other Asian countries.</p>
            <p class="details-page-paragraph">These caps had a remarkable starting due to they became popular when famous people such as athletes and rappers started wearing them, also hockey, American football, basketball and baseball supporters started to wearing them. Through this Americans sports and hip-hop references and even salsa’s singers this culture started to became popular in Colombia. Here people have give them a mayor value, here in Colombia there are different ways to get this caps.</p>
            <p class="details-page-paragraph">One of the most popular are ‘’Tranzas’’ or bartering, you can do it in special events where collectors take their collections in order to promote this culture or selling them. There also another way to get this caps through specialized groups in Facebook. Or in Bogotá, you can find them in the 7th career near to cultural center or in San Victorino there you can buy them or make bartering.</p>
            <p class="details-page-paragraph">So many people asks. Why this caps are so expensive? Or how people give them the commercial coast? By being a collectable article, the most important thing to have in the radar is the veracity, that the caps are original. Instead there are exceptions such as ‘’Aguilas’’ them were originally manufactured by Nike, but South Korea fabrics started making not official copies, I mean not original with sports teams, even so in our days, these costs around 300.000 Colombian pesos or more. There also some caps are made of wool or leather, having similar or more coast, without having into count that all of them are embroiled in thread.</p>
            <img src="https://i.pinimg.com/736x/d6/b6/f3/d6b6f3f78ee89cf35f4ebbba9fb26424.jpg" alt="Collectors and their vintage caps" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">Other of the one most important thing to have in count about the high prices about these collection is the antiquity and how they are cared or conserved, by the way you can make them a restorations or how the collectors says ‘’give them love’’ and if they are easy to get, sometimes when a celebrity have wearied a cap it makes it more expensive or some caps weren’t manufactured in many units, that also make them more expensive, one of these can coast more than 800.000 COP.</p>
            <h3>IMPORTANT FACTS</h3>
            <ul>
             <li>Caps commercial names can change through years or collectors. For example, before ‘’Destellos’’ they were ‘’Colisiones’’ and ‘’Electrocardiograma’’ is also called ‘’onda de choque’’.</li>
             <li>In Colombia, these caps are one of the most stolen articles due to their value.</li>
             <li>Collectors promote a code of respect among themselves and amateurs.</li>
             <li>This cap culture has also been mixed with vintage jumpers and jerseys.</li>
             <li>Starter is one of the favorite producer brands. It was created in 1971 and they bought licenses from major sports leagues (NBA, NFL, MLB, NHL) to make their jackets.</li>
            </ul>
        `,
        summary: `Vintage caps have evolved from mere accessories to valuable collector's items. The article delves into the history of this movement, its connection to sports and music, and how it has become a popular culture in Colombia, with a focus on the unique ways collectors acquire and value these caps.`
    },
    {
        id: '13',
        title: 'CREACIONES CÓMICAS: LA IMAGINACIÓN DE TRANSICIÓN',
        subtitle: 'Una colección de historietas únicas, llenas de creatividad y humor, dibujadas y contadas por los talentosos Niños de Transición.',
        author: 'Niños de Transición',
        category: 'Historietas Hechas por Niños',
        tags: ['dibujo', 'infantil', 'creatividad', 'humor', 'escuela', 'historietas', 'comic'],
        slug: 'historietas-creadas-por-ninos-transicion',
        imageUrl: 'https://i.pinimg.com/736x/6f/5e/58/6f5e58a3611e0100a79479d1c24c703d.jpg', // Sugerencia: Usa la URL de la historieta del Perro Travieso.
        inArticleImageUrl: null,
        date: '30 de Septiembre de 2025',
        fullArticleText: `
        <h1 class="details-page-title">CREACIONES CÓMICAS: LA IMAGINACIÓN DE TRANSICIÓN</h1>
        <p class="details-page-meta"><strong>Por Niños de Transición</strong> | <em>Septiembre 2025</em></p>
        <p class="details-page-paragraph">¡Prepárense para un viaje lleno de color y creatividad! Los talentosos Niños de Transición nos presentan su increíble colección de historietas, donde cada página es una ventana a su imaginación. Desde mascotas traviesas hasta encuentros con extraterrestres, cada historia es un testimonio del poder narrativo y artístico de nuestros pequeños creadores. ¡Disfrútenlas!</p>

        <h2 class="details-page-heading">1. El Perro Travieso y Mi Tarea 🐶</h2>
        <p class="details-page-paragraph">Una mañana de apuros, ¡la tarea desapareció! Sigue las divertidas peripecias de un niño cuyo perro decide darle un uso inesperado a sus deberes, desparramando papeles y causando un pequeño caos camino a la escuela. </p>
        <img src="https://i.pinimg.com/736x/1a/8f/f6/1a8ff65650cc3778ba8eb6b927791afa.jpg" alt="Historieta 1: El Perro Travieso y Mi Tarea" class="details-page-image" loading="lazy" />

        <h2 class="details-page-heading">2. ¡Desastre en la Cocina! 🍳</h2>
        <p class="details-page-paragraph">Una simple receta se convierte en un caos absoluto. Conoce el divertido momento en que la falta de una tapa en la licuadora provoca una explosión de ingredientes que decora toda la cocina, ¡un verdadero desastre culinario!</p>
        <img src="https://i.pinimg.com/736x/97/1e/ca/971ecabeed1f7dcba4910e14f53f7939.jpg" alt="Historieta 2: Desastre en la Cocina" class="details-page-image" loading="lazy" />

        <h2 class="details-page-heading">3. Persecución Canina y Nudo en el Poste 🐕🐈</h2>
        <p class="details-page-paragraph">Un perro ve a su archienemigo felino y no duda en ir tras él. El dueño, con la correa en mano, termina amarrado y dando vueltas alrededor de un poste mientras el perro sigue su instinto de persecución. ¡La ley de la cuerda en acción!</p>
        <img src="https://i.pinimg.com/736x/85/fc/37/85fc379d513404c7e40cd4dd1fc294e6.jpg" alt="Historieta 3: Persecución Canina y Nudo en el Poste" class="details-page-image" loading="lazy" />

        <h2 class="details-page-heading">4. ¡Golazo... y Ventana Rota! ⚽</h2>
        <p class="details-page-paragraph">En medio de un emocionante partido de fútbol, la puntería de los jugadores es un poco demasiado buena. Sigue el momento de terror (y risa) en que el balón se desvía y termina estrellando una ventana. ¿Quién se llevará la culpa?</p>
        <img src="https://i.pinimg.com/736x/19/82/67/1982672f6f8d5056c3783ca6cc857dd4.jpg" alt="Historieta 4: Golazo y Ventana Rota" class="details-page-image" loading="lazy" />

        <h2 class="details-page-heading">5. OVNI Confundido con Frisbee 👽</h2>
        <p class="details-page-paragraph">¡Los marcianos han llegado! Pero su nave es tan pequeña que el perro del barrio la confunde con un disco volador. Una divertida historia de un primer contacto extraterrestre que termina en un juego canino inesperado.</p>
        <img src="https://i.pinimg.com/736x/2c/39/3f/2c393f9ba71048ed672bf385491c4337.jpg" alt="Historieta 5: OVNI Confundido con Frisbee" class="details-page-image" loading="lazy" />
        
        <h2 class="details-page-heading">6. La Revancha del Balón 🥅</h2>
        <p class="details-page-paragraph">El desastre de la ventana rota se repite, o quizás es el mismo momento contado desde otra perspectiva. El balón vuelve a ser el protagonista de un accidente, demostrando que jugar cerca de vidrios siempre es una mala idea.</p>
        <img src="https://i.pinimg.com/736x/9f/58/32/9f5832009bc77c7a2f8379c5aea9c65b.jpg" alt="Historieta 6: La Revancha del Balón" class="details-page-image" loading="lazy" />

        <hr class="details-page-divider" />
        <div class="details-page-footer">
          <p><strong>Autor:</strong> Niños de Transición</p>
          <p><strong>Categoría:</strong> Historietas Hechas por Niños</p>
          <p><strong>Publicado:</strong> Septiembre 2025</p>
          <p class="Tags">dibujo, infantil, creatividad, humor, escuela, historietas, comic</p>
          <p class="details-page-summary">
            <strong>Resumen:</strong> Una encantadora colección de seis historietas creadas por los Niños de Transición, que muestran su imaginación, creatividad y habilidades narrativas a través de diversas aventuras y personajes cotidianos y fantásticos.
          </p>
        </div>
    `,
        summary: `Una encantadora colección de seis historietas creadas por los Niños de Transición, que muestran su imaginación, creatividad y habilidades narrativas a través de diversas aventuras y personajes cotidianos y fantásticos.`
    },
    {
        id: '14',
        title: 'CLEAN HANDS, HEALTHY LIFE: POWER OF ANTIBACTERIAL GEL',
        subtitle: 'The origin, importance, and simple formula to create your own disinfectant gel.',
        author: 'Dylan Galindo, Matias Rodriguez, Victoria Torres, Juan Pablo Medina Doncel',
        category: 'Science and Health',
        tags: ['hygiene', 'health', 'science', 'experiment', 'pandemic', 'alcohol', 'gel', 'tutorial'],
        slug: 'the-power-of-antibacterial-gel-formula-and-history',
        imageUrl: 'https://i.pinimg.com/736x/02/b2/a3/02b2a33dbfe8bb7250a7e93e0984305d.jpg', // Replace this URL with an appropriate image
        inArticleImageUrl: 'https://i.pinimg.com/736x/02/b2/a3/02b2a33dbfe8bb7250a7e93e0984305d.jpg', // Support image inside the article
        date: 'October 16, 2025',
        fullArticleText: `
        
        <h2 class="details-page-heading">Origin</h2>
        <p class="details-page-paragraph">
        For more than 100 years, people have trusted alcohol to clean wounds and protect themselves from germs. But carrying liquid alcohol everywhere was not easy. In the late 20th century, scientists and health workers found a friendlier way: turning alcohol into a gel. This new texture made it safer and more practical to use on our hands. Hospitals were the first places to use it daily, and soon it became part of everyone’s life, especially during health crises like the 2020 pandemic.
        </p>

        <h2 class="details-page-heading">How to make it?</h2>
        <ul class="details-page-list">
            <li>Measure 100 ml of ethyl alcohol using a graduated cylinder.</li>
            <li>Pour the alcohol into a beaker.</li>
            <li>Measure 80 ml of water.</li>
            <li>Add the water to the beaker.</li>
            <li>Stir gently with a glass rod.</li>
            <li>Weigh 1.5 g of carbopol on a watch glass.</li>
            <li>Sift the carbopol until it becomes a fine powder.</li>
            <li>Add the carbopol to the beaker with the mixture.</li>
            <li>Mix patiently, avoiding lumps.</li>
            <li>With a pipette, add 1 ml of glycerin to keep the hands soft.</li>
            <li>Add 1 ml of triethanolamine to give the gel its texture.</li>
            <li>Add 1 ml of cherry fragrance (or another scent you like) for a pleasant touch.</li>
            <li>Stir everything until smooth.</li>
            <li>Pour the gel into a clean container to use whenever you need.</li>
        </ul>
        <img src="https://i.pinimg.com/736x/57/b5/13/57b513c348f42895fc1572fab937dea1.jpg" alt="Process of making antibacterial gel" class="details-page-image" loading="lazy" />

        <h2 class="details-page-heading">Importance</h2>
        <p class="details-page-paragraph">
        Antibacterial gel is more than just a product, it is a daily companion.
        </p>
        <ul class="details-page-list">
            <li>It protects us from germs that can cause illness.</li>
            <li>It is there when we cannot find water and soap.</li>
            <li>It gives peace of mind in schools, on buses, in hospitals, and even during trips.</li>
            <li>Its small bottle often fits in a pocket or backpack, reminding us to care for ourselves and others.</li>
            <li>Using it has become a simple act of kindness: every time we clean our hands, we also protect those around us.</li>
        </ul>
        <p class="details-page-paragraph">
        Antibacterial gel is not only science in action, it is also a way to show love and responsibility for our community.
        </p>
    `,
        summary: `Explores the history and current relevance of antibacterial gel, from its origins in the late 20th century to its fundamental role during the 2020 pandemic. Additionally, the article provides a detailed guide and ingredient list for making your own gel at home, emphasizing its importance as a tool for personal and community protection.`
    },
    {
    id: '15',
    title: 'CHINESE NEW YEAR 2026: A JOURNEY OF DRAGONS AND TRADITION',
    subtitle: 'Relive the vibrant celebration where our community embraced ancient culture through art and joy.',
    author: 'Colegio CREAR Editorial',
    category: 'Announcements',
    tags: ['Chinese New Year', 'culture', 'celebration', 'school events', 'tradition', 'creativity'],
    slug: 'chinese-new-year-celebration-crear-2026',
    imageUrl: 'https://i.pinimg.com/736x/5a/ac/66/5aac665bf00316b31bc0012588e93cea.jpg', // Sugerencia: Una imagen de un dragón o linterna roja
    date: 'February 26, 2026',
    fullArticleText: `
        <p class="details-page-paragraph">The atmosphere at Colegio Crear was transformed into a sea of red and gold as we gathered to celebrate the Lunar New Year. This wasn't just an event; it was a profound cultural immersion that allowed our students to explore the richness of Chinese traditions, symbols, and values. From the strength of the dragon to the wisdom of the ancient legends, every corner of our school breathed inspiration.</p>

        <div class="video-news-container">
            <h3 class="details-page-heading">The Celebration in Motion</h3>
            <div class="video-wrapper">
                <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=deafueoco&public_id=VIDEO-2026-02-26-11-57-38_uqql0y&profile=cld-looping"
                    class="featured-video-iframe"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0">
                </iframe>
            </div>
            <p class="video-caption">Watch the highlights of our vibrant parade and the artistic performances of our students.</p>
        </div>

        <h3 class="details-page-heading">Unity in Diversity</h3>
        <p class="details-page-paragraph">At Colegio Crear, we believe that understanding the world starts with experiencing its diverse cultures. During the festivities, students engaged in hands-on workshops, creating traditional lanterns and learning the art of calligraphy. The playground echoed with laughter and drums, marking a new beginning filled with prosperity and hope for our entire educational family.</p>
        
        <div class="side-image-section central-align">
            <div class="side-text-content">
                <h3 class="details-page-heading">A Legacy of Joy</h3>
                <p class="details-page-paragraph">The highlight of the day was the collaborative spirit shown by every grade. Teachers and students worked side-by-side to decorate our halls, proving that when we celebrate together, we strengthen the bonds of our community. This Chinese New Year has left us with unforgettable memories and a renewed commitment to global citizenship.</p>
            </div>
            <div class="side-image-container">
                <img src="https://i.pinimg.com/736x/ce/3c/8f/ce3c8f255966b60a18e81cba190fbc68.jpg" alt="Traditional Decorations" />
            </div>
        </div>

        <p class="details-page-paragraph quote-text">"May the year ahead bring you the courage of a tiger and the wisdom of a dragon. Happy Lunar New Year to our entire CREAR family!"</p>
    `,
    summary: `A vibrant recap of the Chinese New Year festivities at Colegio Crear, featuring a special video highlights reel, cultural insights, and a message of prosperity for the school community.`
},
    {
    id: '16',
    title: 'Mundo digital: acompañar para proteger',
    subtitle: 'Guía para familias sobre los riesgos y el acompañamiento en el entorno digital.',
    author: 'Departamento de Orientación - Colegio CREAR',
    category: 'Announcements',
    tags: ['seguridad digital', 'familia', 'prevención', 'redes sociales', 'educación'],
    slug: 'mundo-digital-acompanar-para-proteger',
    imageUrl: 'https://i.pinimg.com/736x/ff/63/dd/ff63dd3fe2ee62c6e2b7da526223ee0a.jpg',
    date: 'March 04, 2026',
    fullArticleText: `
        <p class="details-page-paragraph">En la actualidad, las redes sociales y los videojuegos en línea hacen parte de la cotidianidad de niños, niñas y adolescentes. A través de estos espacios se comunican, aprenden, se entretienen y construyen vínculos. Sin embargo, pueden estar expuestos a riesgos que impacten negativamente su bienestar emocional, social e incluso su seguridad.</p>
        
        <p class="details-page-paragraph">Acompañar el uso de la tecnología en casa es una acción de cuidado y corresponsabilidad, por esto, es nuestra responsabilidad informarnos sobre los posibles riesgos y medidas a tomar para orientar mejor a nuestros niños, niñas y adolescentes.</p>

        <div class="side-image-section central-align">
            <div class="side-image-container">
                <img src="https://i.pinimg.com/736x/b8/4b/ba/b84bbad3a7decb27eb80a24f0cd7f73f.jpg" alt="Riesgos Redes Sociales" />
            </div>
            <div class="side-text-content">
                <h3 class="details-page-heading">Entre los riesgos más latentes en redes sociales se encuentran:</h3>
                <ul class="details-page-list">
                    <li><strong>Grooming:</strong> cuando un adulto establece una relación de confianza con un menor a través de internet con fines de abuso o explotación.</li>
                    <li><strong>Sexting:</strong> envío de imágenes o mensajes íntimos que pueden difundirse sin consentimiento.</li>
                    <li><strong>Sextorsión:</strong> chantaje a partir de contenido íntimo previamente compartido.</li>
                    <li><strong>Ciberacoso:</strong> agresiones, amenazas o humillaciones reiteradas en medios digitales.</li>
                    <li><strong>Phishing:</strong> es un delito cibernético que utiliza la mentira y el engaño para robar datos personales que pueden terminar en suplantación de identidad o robo.</li>
                    <li><strong>Exposición a retos virales peligrosos</strong> </li>
                    <li><strong>Exposición a contenidos no apropiados para su edad </strong> (contenido sexual explicito, violencia explicita, mensajes que incitan a odio, sitios que promueven conductas peligrosas como autolesiones, conducta suicida, trastornos de conducta alimentaria, entre otros)</li>
                </ul>
            </div>
        </div>

        <h3 class="details-page-heading">Funciones Críticas en Apps Populares</h3>
        <p class="details-page-paragraph">Muchas plataformas digitales cuentan con funciones que pueden dificultar la supervisión si no se conocen adecuadamente. Por ejemplo, WhatsApp permite activar mensajes temporales, enviar fotos que desaparecen y restringir ciertos chats; Instagram incluye modo efímero, limitación de mensajes y la posibilidad de crear cuentas privadas o secundarias; Telegram ofrece chats secretos con autodestrucción de mensajes; Snapchat elimina mensajes e imágenes tras ser visualizados; y TikTok expone constantemente a nuevos contenidos a través de su algoritmo y permite el envío de mensajes directos. Estas características, aunque pueden tener fines de privacidad, también pueden ser utilizadas para ocultar interacciones o contenidos sin la supervisión de adultos.</p>

        <h3 class="details-page-heading">Videojuegos en red</h3>
        <p class="details-page-paragraph">Por otro lado, los videojuegos en red también incluyen espacios de interacción abierta que requieren supervisión y límites claros. Plataformas como Roblox, Minecraft, Fortnite y Free Fire permiten chatear con otros jugadores, realizar compras dentro del juego y conectarse con personas de diferentes lugares del mundo, lo que puede implicar riesgos como contacto con desconocidos, lenguaje agresivo o ciberacoso, solicitudes de información personal y microtransacciones no autorizadas; además, su sistema de recompensas inmediatas puede favorecer el uso excesivo, afectando el sueño, el rendimiento académico y la regulación emocional si no existe acompañamiento adulto y normas definidas.</p>

        <div class="side-image-section right-side central-align">
            <div class="side-image-container">
                <img src="https://revistavive.com/wp-content/uploads/2023/01/INTERNET-CONTROL-DE-FAMILIA-GRANDE.png" alt="Prevención en casa" />
            </div>
            <div class="side-text-content">
                <h3 class="details-page-heading">¿Qué podemos hacer como familias?</h3>
                <ul class="details-page-list">
                    <li>Mantener un diálogo abierto y sin juicio sobre lo que ven, comparten y juegan.</li>
                    <li>Establecer tiempos definidos de uso y acuerdos claros sobre los contactos que el niño, niña o adolescente puede agregar a redes sociales.</li>
                    <li>Revisar junto a ellos las configuraciones de privacidad y seguridad.</li>
                    <li>Verificar la clasificación por edades de juegos y contenidos.</li>
                    <li>Ubicar los dispositivos en espacios comunes del hogar.</li>
                    <li>Estar atentos a cambios en el estado de ánimo, aislamiento, alteraciones del sueño o secretismo extremo.</li>
                    <li>Reforzar que no deben compartir datos personales, fotografías íntimas ni información del colegio o la familia.</li>
                    <li>Implementar recursos o aplicaciones de supervisión parental como Family link, qustodio, Norton Family, Screen Time, Kids Place, entre otras. </li>
                </ul>
            </div>
        </div>

        <p class="details-page-paragraph">Desde el marco de protección de la infancia en Colombia, el cuidado en entornos digitales es una responsabilidad compartida entre familia, institución y Estado. La supervisión activa y la educación digital son medidas preventivas fundamentales.</p>

        <h3 class="details-page-heading">Nuestro compromiso institucional</h3>
        <p class="details-page-paragraph">Como institución educativa, promovemos el uso consciente, crítico y responsable de la tecnología, favoreciendo el equilibrio entre la vida digital y el desarrollo de habilidades sociales, emocionales y cognitivas mediante experiencias presenciales significativas. Entendemos que acompañar no es invadir, sino orientar, establecer límites claros y construir confianza, pues la mejor prevención surge cuando existe información adecuada, presencia activa y comunicación permanente en la familia. <strong>Por esta razón, el uso de celulares dentro de la institución no está permitido</strong>, salvo autorización formal docente para fines pedagógicos.</p>

        <p class="details-page-paragraph" style="text-align: center; font-style: italic; margin-top: 3rem;">
            "Acompañar no es invadir. Es orientar, establecer límites claros y construir confianza."
        </p>

        <div style="text-align:center; margin-top:2rem;">
    <button
        onclick="document.getElementById('referenciasDigital').classList.toggle('show-referencias')"
        class="referencias-btn">
        Ver referencias
    </button>
</div>

<div id="referenciasDigital" class="referencias-container">
    <p class="details-page-paragraph">
        <strong>Referencias:</strong><br><br>

        Instituto Colombiano de Bienestar Familiar (ICBF). (2019).
        <em>Riesgos digitales a los que se exponen los niños y cómo prevenirlos</em>.<br>
        <a href="https://www.icbf.gov.co/ser-papas/riesgos-digitales-los-que-se-exponen-los-ninos-y-como-prevenirlos" target="_blank">
        Ver fuente
        </a><br><br>

        Instituto Colombiano de Bienestar Familiar (ICBF). (2020).
        <em>Cinco apps de control parental para proteger niñas y niños en internet</em>.<br>
        <a href="https://www.icbf.gov.co/mis-manos-te-ensenan/cinco-apps-de-control-parental-para-proteger-ninas-y-ninos-en-internet" target="_blank">
        Ver fuente
        </a><br><br>

        Valero, B. & Rivera, A. (2023).
        <em>El impacto de los medios y redes sociales en las conductas sociales de niños, niñas y adolescentes (2018-2021)</em>.
        Revista Tejidos Sociales, 5(1), 1-11.<br><br>

        Universidad de Antioquia. (2015).
        <em>Cuando la niñez se vuelve viral. Los riesgos de la exposición en redes sociales</em>.<br>
        <a href="https://www.udea.edu.co/wps/portal/udea/web/inicio/udea-noticias/udea-noticia/contenido/asnoticias/periodicoalmamater/cuando-la-ninez-se-vuelve-viral-pam-744/" target="_blank">
        Ver fuente
        </a><br><br>

        UNICEF. (s.f.).
        <em>Salud mental de los adolescentes y redes sociales</em>.<br>
        <a href="https://www.unicef.org/parenting/es/salud-mental/adolescentes-y-redes-sociales" target="_blank">
        Ver fuente
        </a><br><br>

        UNICEF. (2021).
        <em>¿Son las redes sociales malas para la salud mental de los adolescentes?</em>.<br>
        <a href="https://www.unicef.org/vietnam/stories/social-media-bad-teens-mental-health" target="_blank">
        Ver fuente
        </a>
    </p>
</div>
    `
},
{
        id: '17',
        title: 'WOMEN’S DAY: ART FOR EQUALITY',
        subtitle: 'Our students express the importance of gender equality and women’s rights through representative drawings.',
        author: 'Nicolás Gómez, Aaron Páez, Silvana Cruz, Nicolás Moreno Méndez',
        category: 'Arts & Culture',
        tags: ['Women’s Day', 'equality', 'art', 'student work', 'empowerment'],
        slug: 'womens-day-art-for-equality-2026',
        imageUrl: 'https://i.pinimg.com/1200x/fa/b0/ec/fab0ecd64dcf26b9355a74e067bc5deb.jpg',
        date: 'March 08, 2026',
        fullArticleText: `
            <p class="details-page-paragraph">International Women's Day is a special date at CREAR. Our students used their creativity to celebrate women's history, strength, and the importance of equal rights for everyone. Here are some of the most representative drawings from our gallery.</p>
            
            <h3 class="details-page-heading">A Strong Woman</h3>
            <img src="https://i.pinimg.com/736x/42/c6/1f/42c61f09803e282c9aab39983098b1e1.jpg" alt="A Strong Woman" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">"This drawing shows a woman with a lot of power. Women can do everything and they are very important for the world. I like the colors and the message of strength."</p>
            <p class="details-page-paragraph"><strong>By: Nicolás Moreno Méndez - 3rd Grade</strong></p>

            <h3 class="details-page-heading">The Empress: Asian Monarchy</h3>
            <img src="https://i.pinimg.com/736x/c3/30/b8/c330b883c5192f81abf8ff8f14a78062.jpg" alt="Asian Empress" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">"In history, there are many important women in Asia. This is an Empress. She is a leader and she is very elegant. She represents the intelligence and culture of women in the East."</p>
            <p class="details-page-paragraph"><strong>By: Silvana Cruz - 5th Grade</strong></p>

            <h3 class="details-page-heading">Liberating Women</h3>
            <img src="https://i.pinimg.com/736x/65/97/ae/6597aebafc165545afbd5e1adc838511.jpg" alt="Liberating Women" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">"Women fought for our freedom in the past. They are heroes of history. In this drawing, we see the courage of women who wanted a better future for everyone."</p>
            <p class="details-page-paragraph"><strong>By: Aaron Páez - 5th Grade</strong></p>

            <h3 class="details-page-heading">Gender Equality</h3>
            <img src="https://i.pinimg.com/736x/ec/16/2f/ec162f94e1f4b5d178dc127dd6e43166.jpg" alt="Gender Equality" class="details-page-in-article-image" loading="lazy" />
            <p class="details-page-paragraph">"Equality means that boys and girls have the same opportunities. We need to respect each other. In this picture, you can see how we can build a fair world together."</p>
            <p class="details-page-paragraph"><strong>By: Nicolás Gómez - 3rd Grade</strong></p>
            
            <hr class="details-page-hr"/>
        `,
        summary: `To celebrate International Women's Day, students from 3rd and 5th grade created a series of drawings. The collection highlights women's strength, historical leadership, and the fundamental value of gender equality in our society.`
    },
    {
    id: '18',
    title: 'VOICES FOR EQUALITY: PERSPECTIVES FROM OUR STUDENTS',
    subtitle: 'Students from different grades share reflections, poems, and essays about the historical struggle for gender rights.',
    author: 'Martín Rubiano, Maria Jose Giraldo, Alejandra Leon, Sophie Escobar',
    category: 'Education & Society',
    tags: ['Women’s Day', 'Gender Equality', 'Student Voices', 'Reflection'],
    slug: 'voices-for-equality-student-perspectives-2026',
    imageUrl: 'https://i.pinimg.com/736x/5e/ae/b4/5eaeb4c172d5f57e8a40e0761431464c.jpg',
    date: 'March 08, 2026',
    fullArticleText: `
        <p class="details-page-paragraph">International Women's Day is more than a celebration; it is a moment for deep reflection on the journey toward justice and equity. Our students have expressed their thoughts through essays and poetry, highlighting the importance of building a society where rights are universal.</p>
        
        <h3 class="details-page-heading">Women Struggle for Gender Equality</h3>
        <p class="details-page-paragraph">"The struggle of women for equal gender has evolved over the time to achieve equality and participation in the political, social, labor and education. The idea is to build a society where all people have the same rights. Women raised their voices to have the right to vote, to participate in political work and better conditions due to the fact that we celebrate international women day, a day of reflection and recognition for them."</p>
        <p class="details-page-paragraph"><strong>By: Martín Rubiano - 2º Grade</strong></p>

        <h3 class="details-page-heading">Song to Equality (Poem)</h3>
        <p class="details-page-paragraph" style="font-style: italic; white-space: pre-line;">
        In the long shadows of human history,
        woman raised her silent voice,
        a prisoner of a yoke that cruelly chains her,
        but her soul was never broken.

        She kept in her noble heart firmness,
        constant virtue, ardent courage,
        and although silence marked her sorrow,
        an invincible fervor sprang forth in her spirit.

        Her restrained tears were not in vain,
        nor the slow pace of her tenacious walk,
        for every effort, faithful and endured,
        forged paths of equity and peace.

        Today she rises with dignified head,
        claiming her just status:
        to be free, fulfilled, conscious,
        with no barrier but her reason.

        And in that cry, serene and strong,
        a universal echo resounds:
        that there be no chains dictated by fate,
        nor unjust law that imposes evil.

        Thus, at the dawn of new days,
        the world is reborn in its clarity,
        when in justice and harmony
        equality finally blossoms.
        </p>
        <p class="details-page-paragraph"><strong>By: Maria Jose Giraldo - 4º Grade</strong></p>

        <h3 class="details-page-heading">Our Power</h3>
        <p class="details-page-paragraph">"The struggle of women for gender equality is a historical process that seeks to guarantee the same rights and opportunities for all people. From the suffragist movement, which achieved the right to vote, to current demands, women have driven changes in areas such as education, work, and politics. Although significant progress has been made, challenges remain, such as the gender pay gap, gender-based violence, and underrepresentation in positions of power. Therefore, this struggle continues to be fundamental to building a more just and equitable society."</p>
        <p class="details-page-paragraph"><strong>By: Alejandra Leon - 4º Grade</strong></p>

        <h3 class="details-page-heading">The Fight for Equality</h3>
        <p class="details-page-paragraph">"Women's Day is celebrated on March 8 around the world. This day honors the brave women who fought for equality and better opportunities. In the past, many women did not have the same rights as men. Today organized marches and raised their voices for justice. Women can study, work, and lead in many areas. Women's Day reminds us that everyone deserves respect and equal opportunities."</p>
        <p class="details-page-paragraph"><strong>By: Sophie Escobar - 5º Grade</strong></p>
        
        <hr class="details-page-hr"/>
    `,
    summary: `A collection of powerful reflections and creative writing by students from 2nd to 5th grade. Through poems and essays, they explore the history of the feminist movement, the importance of International Women's Day, and the ongoing challenges to achieve true global equity.`
},

];

export const Details = () => {
    const { articleSlug } = useParams(); // Obtiene el slug de la URL
    const navigate = useNavigate(); // Obtiene la función de navegación

    // Busca el artículo basado en el slug de la URL
    const article = articlesData.find(art => art.slug === articleSlug);

    // Función para volver a la página de inicio
    const handleGoBack = () => {
        navigate("/");
    };

    if (!article) {
        return (
            <div className="details-page-container">
                <p className="not-found-message">Article not found.</p>
                <button onClick={handleGoBack} className="back-button">
                    &larr; Back to Home
                </button>
            </div>
        );
    }

    return (
        // Wrapper div for the back button and the main article container
        <div className="details-page-wrapper">
            {/* Botón para volver al inicio */}
            <button onClick={handleGoBack} className="back-button-top">
                &larr; Volver a Inicio
            </button>

            <div className="details-page-container">
                <header className="details-page-header">
                    <img src={article.imageUrl} alt={article.title} className="details-page-hero-image" />
                    <div className="details-page-header-content">
                        <span className="details-page-category">{article.category}</span>
                        <h1 className="details-page-title">{article.title}</h1>
                        <p className="details-page-subtitle">{article.subtitle}</p>
                        <p className="details-page-meta">By {article.author} | {article.date}</p>
                    </div>
                </header>

                <section
                    className="details-page-body"
                    // dangerouslySetInnerHTML es usado para renderizar HTML crudo
                    dangerouslySetInnerHTML={{ __html: article.fullArticleText }}
                />

                <footer className="details-page-footer">
                    <div className="footer-info-grid">
                        <p><strong>Author:</strong> {article.author}</p>
                        <p><strong>Category:</strong> {article.category}</p>
                        <p><strong>Published:</strong> {article.date}</p>
                        <p><strong>Tags:</strong> {article.tags.join(', ')}</p>
                    </div>
                    {article.summary && (
                        <p className="details-page-summary">
                            <strong>IA summary:</strong> {article.summary}
                        </p>
                    )}
                </footer>
            </div>
        </div>
    );
};