<!DOCTYPE HTML>
<html>
<head>
    <title>Cybersecurity Portfolio - Risha Gupta</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
    <style>
        /* FIXED CSS - No conflicts */
        .projects-toggle { cursor: pointer !important; }
        #projects-container { 
            display: none; opacity: 0; transition: all 0.5s ease; 
            padding: 2rem; margin: 2rem 0;
        }
        #projects-container.show { display: block !important; opacity: 1 !important; }
        
        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        .project-item {
            background: rgba(0,0,0,0.8);
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid #333;
            transition: all 0.3s;
            cursor: pointer;
        }
        .project-item:hover {
            background: rgba(0,255,255,0.1);
            border-color: #00ffff;
            transform: translateY(-3px);
        }
        .project-icon { font-size: 2rem; margin-bottom: 0.5rem; }
        .project-title { color: #00ffff; margin-bottom: 0.5rem; }
        
        /* Detail sections */
        .project-detail {
            display: none;
            margin: 3rem 0;
            padding: 2rem;
            background: rgba(0,0,0,0.9);
            border-radius: 10px;
            border-left: 4px solid #00ffff;
        }
        .project-detail.active { display: block !important; }
        
        /* Navbar fix */
        #header nav ul li a[href="#work"] { color: #00ffff !important; }
    </style>
</head>
<body class="is-preload">

    <div id="wrapper">
        <!-- Header -->
        <header id="header">
            <div class="logo"><span class="icon fa-shield-alt"></span></div>
            <div class="inner">
                <h1>Risha Gupta</h1>
                <p>Cybersecurity Portfolio</p>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#intro" class="smooth-scroll">Home</a></li>
                    <li><a href="#work" class="smooth-scroll projects-toggle">Projects</a></li>
                    <li><a href="#about" class="smooth-scroll">About</a></li>
                    <li><a href="#contact" class="smooth-scroll">Contact</a></li>
                </ul>
            </nav>
        </header>

        <!-- Main -->
        <div id="main">
            <!-- Intro -->
            <article id="intro">
                <h2 class="major">Welcome</h2>
                <span class="image main"><img src="images/pic01.jpg" alt="" /></span>
                <p>Click <strong>Projects</strong> to see all cybersecurity labs & security testing projects.</p>
            </article>

            <!-- WORK SECTION - FIXED -->
            <article id="work">
                <h2 class="major projects-toggle">Cybersecurity Projects</h2>
                
                <!-- Projects List -->
                <div id="projects-list" style="display:none;">
                    <div class="project-grid">
                        <div class="project-item" onclick="showProject('websecurity')">
                            <div class="project-icon">🔐</div>
                            <div class="project-title">DVWA Web Security Testing</div>
                            <p>SQL Injection, XSS, Authentication Bypass</p>
                        </div>
                        
                        <div class="project-item" onclick="showProject('splunk')">
                            <div class="project-icon">🛡</div>
                            <div class="project-title">Splunk SIEM Analysis</div>
                            <p>Log analysis & threat hunting</p>
                        </div>
                        
                        <div class="project-item" onclick="showProject('phishing')">
                            <div class="project-icon">🌐</div>
                            <div class="project-title">Phishing Detector</div>
                            <p>Python ML phishing detection</p>
                        </div>
                        
                        <div class="project-item" onclick="showProject('linux')">
                            <div class="project-icon">🖥</div>
                            <div class="project-title">Linux Monitoring</div>
                            <p>Suspicious activity detection</p>
                        </div>
                    </div>
                </div>

                <!-- Project Details - HIDDEN BY DEFAULT -->
                <div id="websecurity" class="project-detail">
                    <h3>🔐 DVWA Web Security Testing</h3>
                    <img src="images/sql_manual1.png" alt="SQL Injection" style="width:100%;max-width:600px;display:block;margin:1rem auto;">
                    <p>Complete security testing: SQL Injection, Authentication flaws, XSS. <a href="https://github.com/risha463/Web-security-testing_" target="_blank">GitHub</a></p>
                    <button onclick="hideProject()" class="button primary">Close</button>
                </div>

                <div id="splunk" class="project-detail">
                    <h3>🛡 Splunk SIEM Analysis</h3>
                    <p>Log analysis and security monitoring using Splunk SIEM platform.</p>
                    <button onclick="hideProject()" class="button primary">Close</button>
                </div>

                <div id="phishing" class="project-detail">
                    <h3>🌐 Phishing Detector</h3>
                    <p>Python ML-based phishing website detection system.</p>
                    <button onclick="hideProject()" class="button primary">Close</button>
                </div>

                <div id="linux" class="project-detail">
                    <h3>🖥 Linux Monitoring</h3>
                    <p>Linux system monitoring and suspicious activity detection.</p>
                    <button onclick="hideProject()" class="button primary">Close</button>
                </div>
            </article>

            <!-- About -->
            <article id="about">
                <h2 class="major">About</h2>
                <span class="image main"><img src="images/pic03.jpg" alt="" /></span>
                <p>Risha Gupta - Cybersecurity Specialist, Delhi</p>
            </article>

            <!-- Contact -->
            <article id="contact">
                <h2 class="major">Contact</h2>
                <form method="post" action="#">
                    <div class="fields">
                        <div class="field half">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div class="field half">
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div class="field">
                            <textarea name="message" rows="4" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" value="Send Message" class="primary" /></li>
                    </ul>
                </form>
            </article>
        </div>

        <!-- Footer -->
        <footer id="footer">
            <p>&copy; 2026 Risha Gupta. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>
    </div>

    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
    
    <!-- FIXED JAVASCRIPT - NO CONFLICTS -->
    <script>
        // Wait for HTML5 UP to load completely
        window.addEventListener('load', function() {
            console.log('✅ Portfolio JS Loaded');
            
            // 1. Projects Toggle - FIXED
            document.querySelectorAll('.projects-toggle').forEach(el => {
                el.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const projectsList = document.getElementById('projects-list');
                    if (projectsList.style.display === 'none' || !projectsList.style.display) {
                        projectsList.style.display = 'block';
                        this.innerHTML += ' <span style="font-size:0.8em;">▼</span>';
                    } else {
                        projectsList.style.display = 'none';
                        closeAllProjects();
                        this.innerHTML = this.innerHTML.replace(' <span style="font-size:0.8em;">▼</span>', '');
                    }
                });
            });

            // 2. Show Project Detail - FIXED
            window.showProject = function(projectId) {
                closeAllProjects();
                document.getElementById(projectId).classList.add('active');
                document.getElementById('projects-list').scrollIntoView({behavior: 'smooth'});
            };

            // 3. Hide Project - FIXED
            window.hideProject = function() {
                closeAllProjects();
                document.getElementById('projects-list').style.display = 'block';
            };

            // 4. Close All Projects
            function closeAllProjects() {
                document.querySelectorAll('.project-detail').forEach(el => {
                    el.classList.remove('active');
                });
            }

            // 5. Navbar Smooth Scroll - FIXED (No conflicts)
            document.querySelectorAll('.smooth-scroll').forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#work') return; // Handled by toggle
                    
                    const targetId = this.getAttribute('href').substring(1);
                    const target = document.getElementById(targetId);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });

            // 6. Mobile menu fix
            const navToggle = document.getElementById('nav');
            if (navToggle) {
                navToggle.addEventListener('click', function(e) {
                    if (window.innerWidth < 768) {
                        this.classList.toggle('active');
                    }
                });
            }

            console.log('🎯 All clicks FIXED: Projects ✅ | Details ✅ | Navbar ✅');
        });
    </script>
</body>
</html>
