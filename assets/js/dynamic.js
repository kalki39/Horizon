
function getCourseIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function renderList(list, icon = '', strong = false) {
    return list.map(item => `<li>${icon ? `<i class='bx bx-check'></i>` : ''}${strong ? `<strong>${item}</strong>` : item}</li>`).join('');
}

function renderDescription(descArr) {
    return descArr.map(p => `<p>${p}</p>`).join('');
}

function renderReviews(reviews) {
    return reviews.map(r => `
        <div class="user-review">
            <img src="${r.image}" alt="image">
            <div class="review-rating">
                <div class="review-stars">${'<i class="bx bxs-star"></i>'.repeat(r.rating)}</div>
                <span class="d-inline-block">${r.name}</span>
            </div>
            <span class="d-block sub-comment">${r.subComment || ''}</span>
            <p>${r.comment}</p>
        </div>
    `).join('');
}
function rendercourses(courses) {
    return courses.map((r,i) => `
        <div class="col-lg-4 col-md-6 mix business design language">
                            <div class="single-courses-box mb-30">
                                <div class="courses-image">
                                    <a href="course-detail.html?id=${r.id}" class="d-block"><img src="${r.image}" alt="image"></a>
    
                                    <!---- <div class="courses-tag">
                                       <a href="#" class="d-block">Business</a>
                                     </div> --->
                                </div>
    
                                <div class="courses-content">
                                    <!-- <div class="course-author d-flex align-items-center">
                                        <img src="assets/img/user1.jpg" class="rounded-circle mr-2" alt="image">
                                        <span>Steven Smith</span>
                                    </div> -->
    
                                    <h3><a href="course-detail.html?id=${r.id}" class="d-inline-block">${r.title}</a></h3>
    
                                    <div class="courses-rating">
                                        <div class="review-stars-rated">
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                        </div>
    
                                        <div class="rating-total">
                                            4.9
                                        </div>
                                    </div>
                                </div>
    
                                <div class="courses-box-footer">
                                    <ul>
                                        <li class="students-number">
                                            <i class='bx bx-user'></i> ${r.students}
                                        </li>
    
                                        <li class="courses-lesson">
                                            <i class='bx bx-book-open'></i> ${r.lessons}
                                        </li>
                                        <li class="courses">
                                            <i class='bx bx-time'></i> ${r.duration} 
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
    `).join('');
}

function renderSyllabus(syllabus) {
    return syllabus.map(chap => `
        <span class="chapter">${chap.chapter}</span>
        <h4>Lessons</h4>
        <div class="courses-list">
            <ul>${renderList(chap.lessons)}</ul>
        </div>
    `).join('');
}

$(function() {
    const courseId = getCourseIdFromUrl();
    // if (!courseId) return;

    $.getJSON('assets/js/course-detail-dynamic.json', function(courses) {
        const course = courses.find(c => c.id === courseId);
        // console.log(courses);
        // if (!course) {
        //     $('#course-title').text('Course not found');
        //     return;
        // }
        // $('[id=course-title]').text(course.title);
        // $('#course-subtitle').text(course.subtitle);
        // $('#course-duration').text(course.duration);
        // $('#course-students').text(course.students);
        // $('#course-updated').text(course.lastUpdated);
        // $('#course-image').attr('src', course.image);

        // $('#course-whatyoulearn').html(renderList(course.whatYouLearn, "<i class='bx bx-check'></i>"));
        // $('#course-requirements').html(renderList(course.requirements));
        // $('#course-description').html(renderDescription(course.description));
        // $('#course-features').html(renderList(course.features));
        // $('#course-audience').html(renderList(course.audience));
        $('#courses-list').html(rendercourses(courses));

        // $('#instructor-image').attr('src', course.instructor.image);
        // $('#instructor-bio').html(renderDescription(course.instructor.bio));

        // $('#course-reviews').html(renderReviews(course.reviews));

        // // Sidebar info
        // let sidebar = course.sidebar;
        // let sidebarHtml = `
        //     <li><span><i class='bx bx-group'></i> Students:</span> ${sidebar.students}</li>
        //     <li><span><i class='bx bx-time'></i> Length:</span> ${sidebar.length}</li>
        //     <li><span><i class='bx bx-tachometer'></i> Effort:</span> ${sidebar.effort}</li>
        //     <li><span><i class='bx bxs-institution'></i> Institution:</span> <a href="#" class="d-inline-block">${sidebar.institution}</a></li>
        //     <li><span><i class='bx bxs-graduation'></i> Subject:</span> ${sidebar.subject}</li>
        //     <li><span><i class='bx bx-atom'></i> Quizzes:</span> ${sidebar.quizzes}</li>
        //     <li><span><i class='bx bxs-badge-check'></i> Level:</span> ${sidebar.level}</li>
        //     <li><span><i class='bx bx-support'></i> Language:</span> ${sidebar.language}</li>
        //     <li><span><i class='bx bx-text'></i> Video Subtitle:</span> ${sidebar.subtitle}</li>
        //     <li><span><i class='bx bx-certification'></i> Certificate:</span> ${sidebar.certificate}</li>
        // `;
        // $('#sidebar-info').html(sidebarHtml);

        // Syllabus
        // $('#course-syllabus').html(renderSyllabus(course.syllabus));
    });
});
