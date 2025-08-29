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
            <p class="details-page-paragraph">It turns out that in the past, men were in chage of meat... women were in chage of vegetables, because they had to think carefully since some could be poisonous and could endanger the family. it was very difficult to choose the right vegetables. for example a girl sees 3 yellow, red and purple grapes, then looks at 3 iguanas where 2 of them die, and discovers taht yhe purple grapes are not poisonous and this knoledge has been passed down from generation to generation until 2023, our time.</p>
            <p class="details-page-paragraph">BY: Student- Grado 3°</p>
            <img src="https://i.pinimg.com/1200x/23/d1/6e/23d16ed54508a96b1ce879998aceb7bf.jpg" alt="Woman shopping" class="details-page-in-article-image" loading="lazy" />
        `,
        summary: `A theory from a third-grade student exploring the historical reasons behind why women might take longer when shopping, linking it to ancient food-gathering practices.`
    }
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