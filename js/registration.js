function readURL(a) {
    if (a.files && a.files[0]) {
        var b = new FileReader;
        b.onload = function(a) {
            $("#profile-picture-preview").attr("src", a.target.result)
        }, b.readAsDataURL(a.files[0])
    }
}

function fb_login() {
    "" == $("#citizen_auth").val() ? alert("กรุณากรอกรหัสบัตรประชาชน") : ($("#fb-connect").html("กำลังเชื่อมต่อ..."), FB.login(function(a) {
        "connected" === a.status ? FB.api("/me", function(a) {
            $("#fb-connect").html("สมัคร"), facebook = a, registrantID = a.id, facebookID = a.name, authen()
        }) : "not_authorized" === a.status ? document.getElementById("status").innerHTML = "Please log into this app." : document.getElementById("status").innerHTML = "Please log into Facebook."
    }))
}

function authen() {
    $.ajax({
        url: "URL was removed for security reason",
        type: "POST",
        dataType: "json",
        data: {
            facebook_id: registrantID,
            facebook_name: facebookID,
            citizen: $("#citizen_auth").val()
        },
        success: function(a) {
            if (registrantID = a.profile.id, facebookID = a.profile.facebook_id, 10 != a.profile.lock_worldclass) {
                proceedNext(2), "" != a.profile.profile_picture && $("#profile-picture-preview").attr("src", "URL was removed for security reason"), "" != a.profile.title && $("#title").val(a.profile.title), $("#firstname").val(a.profile.firstname), $("#lastname").val(a.profile.lastname), $("#nickname").val(a.profile.nickname), "" != a.profile.gender && $("#gender").val(a.profile.gender), $("#birthdate").val(a.profile.birthdate), $("#ethnicity").val(a.profile.ethnicity), $("#nationality").val(a.profile.nationality), "" != a.profile.religious && $("#relogious").val(a.profile.religious), $("#citizen").val(a.profile.citizen), $("#upload_registrant_id").val(registrantID), $("#upload_facebook_id").val(facebookID), $("#upload_question_registrant_id").val(registrantID), $("#upload_question_facebook_id").val(facebookID), $('#quota[name="quota"][value="' + a.profile.quota + '"]').prop("checked", !0), $quota = a.profile.quota, $("#school").val(a.profile.school_name), $("#school_major").val(a.profile.school_major), $("#school_province").val(a.profile.province_name), $("#gpax").val(a.profile.gpax), $("#address").val(a.contact.address), $("#district").val(a.contact.district), $("#province").val(a.contact.province_name), $("#postal").val(a.contact.postal), $("#phone").val(a.contact.phone), $("#email").val(a.contact.email), $("#blog").val(a.contact.blog), $("#parent_name").val(a.contact.parent_name), $("#parent_relationship").val(a.contact.parent_relationship), $("#parent_phone").val(a.contact.parent_phone), "" != a.medical.bloodtype && $("#bloodtype").val(a.medical.bloodtype), $("#foodallergy").val(a.medical.foodallergy), $("#congenital_disease").val(a.medical.congenital_disease), $("#medicine").val(a.medical.medicine);
                for (var b = 0; b < a.answer.length; b++) "EMO-1" == a.answer[b].question_id ? CKEDITOR.instances.questionemo1.setData(a.answer[b].answer) : "EMO-2" == a.answer[b].question_id && CKEDITOR.instances.questionemo2.setData(a.answer[b].answer);
                if (void 0 != a.knowus) {
                    for (var b = 0; b < a.knowus.length - 1; b++) a.knowus[b].how >= 0 && $('#knowus[name="knowus"][value="' + a.knowus[b].how + '"]').prop("checked", !0);
                    $("#other").val(a.knowus[7].how)
                }
                "BUS" != a.major.faculty && "ENG" != a.major.faculty && "INT" != a.major.faculty || ($("#major_step").show(), $("#section").show(), "ENG" == a.major.faculty ? ($("#ENG").addClass("faculty-circle-selected"), showAll = ENG, facultySelect = "ENG") : "INT" == a.major.faculty ? ($("#IT").addClass("faculty-circle-selected"), facultySelect = "INT", showAll = IT) : "BUS" == a.major.faculty && ($("#BA").addClass("faculty-circle-selected"), facultySelect = "BUS", showAll = BA), $("#form1").html(function() {
                    for (var b = "", c = 0; c < showAll.length; c++)
                        if (showAll[c].substring(0, 2) == a.major.first) {
                            b += '<option value ="' + showAll[c].substring(0, 2) + '">' + showAll[c] + "</option>";
                            break
                        }
                    for (var c = 0; c < showAll.length; c++) showAll[c].substring(0, 2) != a.major.first && (b += '<option value ="' + showAll[c].substring(0, 2) + '">' + showAll[c] + "</option>");
                    return b += '<option value = "no">ไม่ระบุ</option>'
                }), $("#form2").html(function() {
                    var b = "";
                    if ("no" == a.major.second) b += '<option value = "no">ไม่ระบุ</option>';
                    else
                        for (var c = 0; c < showAll.length; c++)
                            if (showAll[c].substring(0, 2) == a.major.second) {
                                b += '<option value ="' + showAll[c].substring(0, 2) + '">' + showAll[c] + "</option>";
                                break
                            } for (var c = 0; c < showAll.length; c++) showAll[c].substring(0, 2) != a.major.second && showAll[c].substring(0, 2) != a.major.first && (b += '<option value ="' + showAll[c].substring(0, 2) + '">' + showAll[c] + "</option>");
                    return b += '<option value = "no">ไม่ระบุ</option>'
                }), $("#form3").html(function() {
                    var b = "";
                    if ("no" == a.major.second) return b += '<option value = "no">ไม่ระบุ</option>';
                    if ("no" == a.major.third) b += '<option value = "no">ไม่ระบุ</option>';
                    else
                        for (var c = 0; c < showAll.length; c++)
                            if (showAll[c].substring(0, 2) == a.major.third) {
                                b += '<option value ="' + showAll[c].substring(0, 2) + '">' + showAll[c] + "</option>";
                                break
                            } for (var c = 0; c < showAll.length; c++) showAll[c].substring(0, 2) != a.major.third && showAll[c].substring(0, 2) != a.major.second && showAll[c].substring(0, 2) != a.major.first && (b += '<option value ="' + showAll[c].substring(0, 2) + '">' + showAll[c] + "</option>");
                    return "no" != a.major.third && (b += '<option value = "no">ไม่ระบุ</option>'), b
                }))
            } else if (checkGetAll(), $("#Head").html(function() {
                    return "สมัครเสร็จสิ้น"
                }), $("#step-1").fadeOut(), $("#step-8").delay(250).fadeIn(1e3), $("#ball-1").removeClass("active"), $("#ball-8").addClass("active"), $("#close").hide(), $("#finish").hide(), $("#goMain").show(), $(window).width() >= 1200) {
                var c = parseFloat($("#ship").css("left").replace("px", ""));
                $("#ship").css("left", parseFloat(c + 920) + "px")
            } else if ($(window).width() <= 320) {
                var c = parseFloat($("#ship").css("left").replace("px", ""));
                $("#ship").css("left", parseFloat(c + 96) + "px")
            } else if ($(window).width() <= 480) {
                var c = parseFloat($("#ship").css("left").replace("px", ""));
                $("#ship").css("left", parseFloat(c + 160) + "px")
            } else if ($(window).width() <= 667) {
                var c = parseFloat($("#ship").css("left").replace("px", ""));
                $("#ship").css("left", parseFloat(c + 400) + "px")
            } else if ($(window).width() <= 750) {
                var c = parseFloat($("#ship").css("left").replace("px", ""));
                $("#ship").css("left", parseFloat(c + 480) + "px")
            }
        },
        error: showError
    })
}

function jsQuestion(a) {
    for (var b = 0; b < a.questions.length; b++) questionID[b] = a.questions[b].question_id, questionName[b] = a.questions[b].question
}

function jsProvinces(a) {
    for (var b = 0; b < a.province.length; b++) provinces[b] = a.province[b].province_name
}

function insertProvince(a, b) {
    1 == b ? ($("#school_province").val(a), $("#province_show1").html(function() {
        return "<p> </p>"
    })) : ($("#province").val(a), $("#province_show2").html(function() {
        return "<p> </p>"
    }))
}

function backStep() {
    if ($("#step-" + (parseInt(this.value) + 1)).fadeOut(), $("#step-" + parseInt(this.value)).delay(250).fadeIn(1e3), $("#ball-" + (parseInt(this.value) + 1)).removeClass("active"), $("#ball-" + parseInt(this.value)).addClass("active"), $(window).width() >= 1200) {
        var a = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(a - 115) + "px")
    } else if ($(window).width() <= 320) {
        var a = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(a - 12) + "px")
    } else if ($(window).width() <= 480) {
        var a = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(a - 20) + "px")
    } else if ($(window).width() <= 667) {
        var a = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(a - 50) + "px")
    } else if ($(window).width() <= 750) {
        var a = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(a - 60) + "px")
    }
}

function nextStep() {
    var b, a = this.value,
        c = "";
    if (2 == a) return void("" == $("#citizen_auth").val() ? c += "กรุณากรอกรหัสบัตรประชาชน" : ($.ajax({
        url: "URL was removed for security reason",
        dataType: "json",
        success: function(a) {
            jsProvinces(a)
        }
    }), $.ajax({
        url: "URL was removed for security reason",
        dataType: "json",
        success: function(a) {
            jsQuestion(a)
        }
    })));
    if (3 == a) "images/profile.png" == $("#profile-picture-preview").attr("src") && (c += "กรุณาอัพโหลดรูปภาพ\n"), "" == $("#firstname").val() && (c += "กรุณาใส่ชื่อ\n"), "" == $("#lastname").val() && (c += "กรุณาใส่นามสกุล\n"), "" == $("#nickname").val() && (c += "กรุณาใส่ชื่อเล่น\n"), "" == $("#birthdate").val() && (c += "กรุณาใส่วันเกิด\n"), "" == $("#ethnicity").val() && (c += "กรุณาใส่เชื้อชาติ\n"), "" == $("#nationality").val() && (c += "กรุณาใส่สัญชาติ\n"), "" == $("#citizen").val() && (c += "กรุณาใส่บัตรประชาชน\n"), 0 != $('#quota[name="quota"]:checked').val() && 1 != $('#quota[name="quota"]:checked').val() && (c += "กรุณาใส่โควต้า\n"), "" == $("#school").val() && (c += "กรุณาใส่โรงเรียน\n"), "" == $("#school_major").val() && (c += "กรุณาใส่สายการเรียน\n"), "" == $("#school_province").val() && (c += "กรุณาใส่จังหวัดโรงเรียน\n"), "" == $("#gpax").val() && (c += "กรุณาใส่เกรด\n"), "" == c ? b = {
        id: registrantID,
        facebook_id: facebookID,
        step: a - 1,
        title: $("#title").val(),
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        nickname: $("#nickname").val(),
        gender: $("#gender").val(),
        birthdate: $("#birthdate").val(),
        ethnicity: $("#ethnicity").val(),
        nationality: $("#nationality").val(),
        relogious: $("#relogious").val(),
        citizen: $("#citizen").val(),
        quota: $('#quota[name="quota"]:checked').val(),
        school: $("#school").val(),
        school_major: $("#school_major").val(),
        school_province: $("#school_province").val(),
        gpax: $("#gpax").val()
    } : alert(c);
    else if (4 == a) "" == $("#address").val() && (c += "กรุณากรอกที่อยู่\n"), "" == $("#district").val() && (c += " กรุณากรอกเขค\n"), "" == $("#province").val() && (c += "กรุณากรอกจังหวัด\n"), "" == $("#postal").val() && (c += "กรุณารหัสไปรษณีย์\n"), "" == $("#phone").val() && (c += "กรุณากรอกเบอร์โทรศัพท์\n"), "" == $("#email").val() && (c += "กรุณากรอกอีเมลล์\n"), "" == $("#parent_name").val() && (c += "กรุณากรอกชื่อพ่อแม่\n"), "" == $("#parent_relationship").val() && (c += "กรุณากรอกความสัมพันธ์ของผู้ปกครอง\n"), "" == $("#parent_phone").val() && (c += "กรุณากรอกเบอร์โทรศัพท์พ่อแม่"), "" == c ? b = {
        id: registrantID,
        facebook_id: facebookID,
        step: a - 1,
        address: $("#address").val(),
        district: $("#district").val(),
        province: $("#province").val(),
        postal: $("#postal").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
        blog: $("#blog").val(),
        parent_name: $("#parent_name").val(),
        parent_relationship: $("#parent_relationship").val(),
        parent_phone: $("#parent_phone").val()
    } : alert(c);
    else if (5 == a) {
        var d, e, f, g, h, i, j, k;
        d = $('#knowus[name="knowus"][value="1"]').prop("checked") ? 1 : -1, e = $('#knowus[name="knowus"][value="2"]').prop("checked") ? 2 : -2, f = $('#knowus[name="knowus"][value="3"]').prop("checked") ? 3 : -3, g = $('#knowus[name="knowus"][value="4"]').prop("checked") ? 4 : -4, h = $('#knowus[name="knowus"][value="5"]').prop("checked") ? 5 : -5, i = $('#knowus[name="knowus"][value="6"]').prop("checked") ? 6 : -6, j = $('#knowus[name="knowus"][value="7"]').prop("checked") ? 7 : -7, k = "" == $("#other").val() ? "No" : $("#other").val(), b = {
            id: registrantID,
            facebook_id: facebookID,
            step: a - 1,
            worldclass: 20,
            bloodtype: $("#bloodtype").val(),
            foodallergy: $("#foodallergy").val(),
            congenital_disease: $("#congenital_disease").val(),
            medicine: $("#medicine").val(),
            know1: d,
            know2: e,
            know3: f,
            know4: g,
            know5: h,
            know6: i,
            know7: j,
            other: k
        }
    } else if (6 == a) {
        if ("no" == $("#form1").val() && (c += "กรุณาเลือกสาขาอย่างน้อยหนึ่งสาขา", alert(c)), b = {
                id: registrantID,
                facebook_id: facebookID,
                step: a - 1,
                faculty: facultySelect,
                first: $("#form1").val(),
                second: $("#form2").val(),
                third: $("#form3").val()
            }, $("#question_faculty_1").html(function() {
                return ""
            }), $("#question_faculty_2").html(function() {
                return ""
            }), $("#question_faculty_3").html(function() {
                return ""
            }), "ENG" == facultySelect) {
            $("#uploadMT").hide(), $("#choose-question-btn").hide();
            var l = "";
            $("#question_faculty_1").html(function() {
                for (var a = 0; a < questionID.length; a++)
                    if ("ENG-1" == questionID[a]) {
                        l += "<p>1." + questionName[a] + "</p>";
                        break
                    }
                return l += '<textarea class="form-control" id="question1"></textarea>', l += '<script type ="text/javascript"> CKEDITOR.replace("question1");</script>'
            });
            var m = "";
            $("#question_faculty_2").html(function() {
                m += '<div class="col-sm-6">';
                for (var a = 0; a < questionID.length; a++)
                    if ("ENG-2" == questionID[a]) {
                        m += "<p>2. " + questionName[a] + "</p>";
                        break
                    }
                m += '<img src ="images/ENG/ENG-1.png" width="100%">', m += '<input type="text" class="form-control" id="question2">', m += "</div>", m += '<div class="col-sm-6">';
                for (var a = 0; a < questionID.length; a++)
                    if ("ENG-3" == questionID[a]) {
                        m += "<p>3. " + questionName[a] + "</p>";
                        break
                    }
                return m += '<img src ="images/ENG/ENG-2.png" width ="100%">', m += '<input type="text" class="form-control" id="question3">', m += "</div>"
            })
        } else if ("INT" == facultySelect) {
            $("#uploadMT").show(), $("#choose-question-btn").show();
            var l = "",
                m = "",
                n = "";
            $("#question_faculty_1").html(function() {
                for (var a = 0; a < questionID.length; a++)
                    if ("INT-1" == questionID[a]) {
                        l += "<p>1." + questionName[a] + "</p>";
                        break
                    }
                return l += '<textarea class="form-control" id="question1"></textarea>', l += '<script type ="text/javascript"> CKEDITOR.replace("question1");</script>'
            }), $("#question_faculty_2").html(function() {
                for (var a = 0; a < questionID.length; a++)
                    if ("INT-2" == questionID[a]) {
                        m += "<p>2." + questionName[a] + "</p>";
                        break
                    }
                return m
            }), $("#question_faculty_3").html(function() {
                for (var a = 0; a < questionID.length; a++)
                    if ("INT-3" == questionID[a]) {
                        n += "<p>3." + questionName[a] + "</p>";
                        break
                    }
                return n += '<textarea class="form-control" id="question3"></textarea>', n += '<script type ="text/javascript"> CKEDITOR.replace("question3");</script>'
            })
        } else if ("BUS" == facultySelect) {
            $("#uploadMT").hide(), $("#choose-question-btn").hide();
            var l = "",
                m = "";
            $("#question_faculty_1").html(function() {
                for (var a = 0; a < questionID.length; a++)
                    if ("BUS-1" == questionID[a]) {
                        l += "<p>1." + questionName[a] + "</p>";
                        break
                    }
                return l += '<textarea class="form-control" id="question1"></textarea>', l += '<script type ="text/javascript"> CKEDITOR.replace("question1");</script>'
            }), $("#question_faculty_2").html(function() {
                for (var a = 0; a < questionID.length; a++)
                    if ("BUS-2" == questionID[a]) {
                        m += "<p>2." + questionName[a] + "</p>";
                        break
                    }
                return m += '<textarea class="form-control" id="question2"></textarea>', m += '<script type ="text/javascript"> CKEDITOR.replace("question2");</script>'
            })
        }
        "" == c && ("ENG" == facultySelect ? getFacultyQuiz() : "INT" == facultySelect ? getFacultyQuiz() : "BUS" == facultySelect && getFacultyQuiz())
    } else if (7 == a) "ENG" == facultySelect ? ("" == CKEDITOR.instances.question1.getData() && (c += "กรุณากรอกคำถามที่ 1"), "" == $("#question2").val() && (c += "กรุณากรอกคำถามที่ 2"), "" == $("#question3").val() && (c += "กรุณากรอกคำถามที่ 3"), "" == c ? (b = {
        id: registrantID,
        facebook_id: facebookID,
        step: a - 1,
        Faculty: facultySelect,
        question1: CKEDITOR.instances.question1.getData(),
        question2: $("#question2").val(),
        question3: $("#question3").val()
    }, $("#uploadMT").html(function() {
        return "ยังไม่อัพไฟล์"
    })) : alert(c)) : "INT" == facultySelect ? ($.ajax({
        url: "URL was removed for security reason",
        type: "POST",
        data: {
            id: registrantID
        },
        dataType: "json",
        success: function(a) {}
    }), "" == CKEDITOR.instances.question1.getData() && (c += "กรุณากรอกคำถามที่ 1"), "อัพโหลดไฟล์แล้ว" != $("#uploadMT").text() && (c += "กรุณาอัพโหลดไฟล์"), "" == CKEDITOR.instances.question3.getData() && (c += "กรุณากรอกคำถามที่ 3"), "" == c ? b = {
        id: registrantID,
        facebook_id: facebookID,
        step: a - 1,
        Faculty: facultySelect,
        question1: CKEDITOR.instances.question1.getData(),
        question3: CKEDITOR.instances.question3.getData()
    } : alert(c)) : "BUS" == facultySelect && ("" == CKEDITOR.instances.question1.getData() && (c += "กรุณากรอกคำถามที่ 1"), "" == CKEDITOR.instances.question2.getData() && (c += "กรุณากรอกคำถามที่ 2"), "" == c ? (b = {
        id: registrantID,
        facebook_id: facebookID,
        step: a - 1,
        Faculty: facultySelect,
        question1: CKEDITOR.instances.question1.getData(),
        question2: CKEDITOR.instances.question2.getData()
    }, $("#uploadMT").html(function() {
        return "<p>ยังไม่อัพไฟล์</p>"
    })) : alert(c));
    else if (8 == a)
        if ("" == CKEDITOR.instances.questionemo1.getData() && (c += "กรุณาตอบคำถามข้อที่ 1"), "" == CKEDITOR.instances.questionemo2.getData() && (c += "กรุณาตอบคำถามข้อที่ 2"), "" == c) {
            var o = CKEDITOR.instances.questionemo1.getData(),
                p = CKEDITOR.instances.questionemo2.getData();
            b = {
                id: registrantID,
                facebook_id: facebookID,
                step: a - 1,
                question_1: o,
                question_2: p
            }
        } else alert(c);
        "" == c && ($.ajax({
        url: "URL was removed for security reason",
        type: "POST",
        dataType: "json",
        data: b,
        success: proceedNext(a)
    }), 8 == a && checkGetAll())
}

function getFacultyQuiz() {
    $.ajax({
        url: "URL was removed for security reason",
        type: "POST",
        dataType: "json",
        data: {
            id: registrantID,
            facebook_id: facebookID
        },
        success: function(a) {
            if ("ENG" == facultySelect)
                for (var b = 0; b < a.answer.length; b++) "ENG-1" == a.answer[b].question_id ? CKEDITOR.instances.question1.setData(a.answer[b].answer) : "ENG-2" == a.answer[b].question_id ? $("#question2").val(a.answer[b].answer) : "ENG-3" == a.answer[b].question_id && $("#question3").val(a.answer[b].answer);
            else if ("INT" == facultySelect)
                for (var b = 0; b < a.answer.length; b++) "INT-1" == a.answer[b].question_id ? CKEDITOR.instances.question1.setData(a.answer[b].answer) : "INT-2" == a.answer[b].question_id ? $("#uploadMT").html(function() {
                    return "อัพโหลดไฟล์แล้ว"
                }) : "INT-3" == a.answer[b].question_id && CKEDITOR.instances.question3.setData(a.answer[b].answer);
            else if ("BUS" == facultySelect)
                for (var b = 0; b < a.answer.length; b++) "BUS-1" == a.answer[b].question_id ? CKEDITOR.instances.question1.setData(a.answer[b].answer) : "BUS-2" == a.answer[b].question_id && CKEDITOR.instances.question2.setData(a.answer[b].answer)
        },
        error: showError
    })
}

function showError() {
    alert("fail")
}

function checkGetAll() {
    $.ajax({
        url: "URL was removed for security reason",
        type: "POST",
        dataType: "json",
        data: {
            registrantID: registrantID,
            facebookID: facebookID
        },
        success: function(a) {
            $("#profile-picture-preview_1").attr("src", "URL was removed for security reason"), $("#title_1").val(a.profile.title), $("#firstname_1").val(a.profile.firstname), $("#lastname_1").val(a.profile.lastname), $("#nickname_1").val(a.profile.nickname), $("#gender_1").val(a.profile.gender), $("#birthdate_1").val(a.profile.birthdate), $("#ethnicity_1").val(a.profile.ethnicity), $("#nationality_1").val(a.profile.nationality), $("#relogious_1").val(a.profile.religious), $("#citizen_1").val(a.profile.citizen), $('#quota_1[name="quota_1"][value="' + a.profile.quota + '"]').prop("checked", !0), $quota = a.profile.quota, $("#school_1").val(a.profile.school_name), $("#school_major_1").val(a.profile.school_major), $("#school_province_1").val(a.profile.province_name), $("#gpax_1").val(a.profile.gpax), $("#address_1").val(a.contact.address), $("#district_1").val(a.contact.district), $("#province_1").val(a.contact.province_name), $("#postal_1").val(a.contact.postal), $("#phone_1").val(a.contact.phone), $("#email_1").val(a.contact.email), $("#blog_1").val(a.contact.blog), $("#parent_name_1").val(a.contact.parent_name), $("#parent_relationship_1").val(a.contact.parent_relationship), $("#parent_phone_1").val(a.contact.parent_phone), $("#bloodtype_1").val(a.medical.bloodtype), $("#foodallergy_1").val(a.medical.foodallergy), $("#congenital_disease_1").val(a.medical.congenital_disease), $("#medicine_1").val(a.medical.medicine);
            for (var b = 0; b < a.knowus.length - 1; b++) a.knowus[b].how >= 0 && $('#knowus_1[name="knowus_1"][value="' + a.knowus[b].how + '"]').prop("checked", !0);
            $("#other_1").val(a.knowus[7].how), $("#Chao1").html(function() {
                return '<div class="col-sm-12" style="background : rgba(255,255,255,0.3); border-radius:10px; display:table;">' + a.answer_chao[0].answer + "</div>"
            }), $("#Chao2").html(function() {
                return '<div class="col-sm-12" style="background : rgba(255,255,255,0.3); border-radius:10px; display:table;">' + a.answer_chao[1].answer + "</div>"
            }), "ENG" == a.major.faculty ? ($("#QQ3").show(), showAll = ENG, facultySelect = "ENG", $("#Faculty_1").html(function() {
                return "คณะวิศวกรรมศาสตร์"
            }), $("#Q1").html(function() {
                return a.question_Faculty[0].question
            }), $("#Q2").html(function() {
                return a.question_Faculty[1].question
            }), $("#Q3").html(function() {
                return a.question_Faculty[2].question
            }), $("#A1").html(function() {
                return '<div class="col-sm-12" style="background : rgba(255,255,255,0.3); border-radius:10px; display:table;">' + a.answer_Faculty[0].answer + "</div>"
            }), $("#A2").html(function() {
                var b = "";
                return b += '<div class="col-sm-6"><img src ="images/ENG/ENG-1.png" width ="100%">', b += '<input type="text" id="AA2"  class="form-control" disabled value="' + a.answer_Faculty[1].answer + '"> </div>'
            }), $("#A3").html(function() {
                var b = "";
                return b += '<div class="col-sm-6"><img src ="images/ENG/ENG-2.png" width ="100%">', b += '<input type="text" id="AA3" class="form-control"  disabled value="' + a.answer_Faculty[2].answer + '"> </div>'
            })) : "INT" == a.major.faculty ? ($("#QQ3").show(), facultySelect = "INT", showAll = IT, $("#Faculty_1").html(function() {
                return "คณะเทคโนโลยีสารสนเทศ"
            }), $("#Q1").html(function() {
                return a.question_Faculty[0].question
            }), $("#Q2").html(function() {
                return a.question_Faculty[1].question
            }), $("#Q3").html(function() {
                return a.question_Faculty[2].question
            }), $("#A1").html(function() {
                return '<div class="col-sm-12" style="background : rgba(255,255,255,0.3); border-radius:10px; display:table;">' + a.answer_Faculty[0].answer + "</div>"
            }), $("#A2").html(function() {
                return '<div class="col-sm-12" style="background : rgba(255,255,255,0.3); border-radius:10px; display:table;"> <p>' + a.answer_Faculty[1].answer + "</p></div>"
            }), $("#A3").html(function() {
                return '<div class="col-sm-12" style="background : rgba(255,255,255,0.3); border-radius:10px; display:table;">' + a.answer_Faculty[2].answer + "</div>"
            })) : "BUS" == a.major.faculty && ($("#QQ3").hide(), facultySelect = "BUS", showAll = BA, $("#Faculty_1").html(function() {
                return "คณะบริหารธุรกิจ"
            }), $("#Q1").html(function() {
                return a.question_Faculty[0].question
            }), $("#Q2").html(function() {
                return a.question_Faculty[1].question
            }), $("#A1").html(function() {
                return '<div class="col-sm-12" style="background : rgba(255,255,255,0.3); border-radius:10px; display:table;">' + a.answer_Faculty[0].answer + "</div>"
            }), $("#A2").html(function() {
                return '<div class="col-sm-12" style="background : rgba(255,255,255,0.3); border-radius:10px; display:table;">' + a.answer_Faculty[1].answer + "</div>"
            }));
            for (var b = 0; b < showAll.length; b++)
                if (a.major.first == showAll[b].substring(0, 2)) {
                    $("#Major_1").html(function() {
                        return "<p> " + showAll[b] + "</p>"
                    });
                    break
                }
            for (var b = 0; b < showAll.length; b++)
                if (a.major.second == showAll[b].substring(0, 2)) {
                    $("#Major_2").html(function() {
                        return "<p>" + showAll[b] + "</p>"
                    });
                    break
                }
            for (var b = 0; b < showAll.length; b++)
                if (a.major.third == showAll[b].substring(0, 2)) {
                    $("#Major_3").html(function() {
                        return "<p>" + showAll[b] + "</p>"
                    });
                    break
                }
        }
    })
}

function proceedNext(a) {
    var b = this.value ? this.value : a;
    if ($("#step-" + (parseInt(b) - 1)).fadeOut(), $("#step-" + parseInt(b)).delay(250).fadeIn(1e3), $("#ball-" + (parseInt(b) - 1)).removeClass("active"), $("#ball-" + parseInt(b)).addClass("active"), $(window).width() >= 1200) {
        var c = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(c + 115) + "px")
    } else if ($(window).width() <= 320) {
        var c = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(c + 12) + "px")
    } else if ($(window).width() <= 480) {
        var c = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(c + 20) + "px")
    } else if ($(window).width() <= 667) {
        var c = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(c + 50) + "px")
    } else if ($(window).width() <= 750) {
        var c = parseFloat($("#ship").css("left").replace("px", ""));
        $("#ship").css("left", parseFloat(c + 60) + "px")
    }
}

function insertSchool(a) {
    $("#school").val(a), $("#hah").html(function() {
        return "<p> </p>"
    })
}

function selectFaculty(a) {
    $("#major_step").show();
    var b = "";
    $("#section").show(), $("#question_Mt").hide(), $("#ENG").removeClass("faculty-circle-selected"), $("#IT").removeClass("faculty-circle-selected"), $("#BA").removeClass("faculty-circle-selected"), 1 == a ? ($("#ENG").addClass("faculty-circle-selected"), showAll = ENG, facultySelect = "ENG") : 2 == a ? ($("#IT").addClass("faculty-circle-selected"), facultySelect = "INT", showAll = IT) : 3 == a && ($("#BA").addClass("faculty-circle-selected"), facultySelect = "BUS", showAll = BA), $("#form1").html(function() {
        b += '<option value = "no">ไม่ระบุ</option>';
        for (var a = 0; a < showAll.length; a++) b += '<option value ="' + showAll[a].substring(0, 2) + '">' + showAll[a] + "</option>";
        return b
    });
    var c = "";
    $("#form2").html(function() {
        return c = '<option value = "no">ไม่ระบุ</option>'
    });
    var d = "";
    $("#form3").html(function() {
        return d = '<option value = "no">ไม่ระบุ</option>'
    })
}

function changeMajor(a) {
    if (1 == a) {
        $("#form3").html(function() {
            return c = '<option value = "no">ไม่ระบุ</option>'
        });
        var b = "";
        $("#form2").html(function() {
            if (b += '<option value = "no">ไม่ระบุ</option>', "no" != $("#form1").val())
                for (var a = 0; a < showAll.length; a++) $("#form1").val() != showAll[a].substring(0, 2) && (b += '<option value ="' + showAll[a].substring(0, 2) + '">' + showAll[a] + "</option>");
            return b
        })
    } else if (2 == a) {
        var c = "";
        $("#form3").html(function() {
            if (c += '<option value = "no">ไม่ระบุ</option>', "no" != $("#form2").val() && "no" != $("#form1").val())
                for (var a = 0; a < showAll.length; a++) $("#form1").val() != showAll[a].substring(0, 2) && $("#form2").val() != showAll[a].substring(0, 2) && (c += '<option value ="' + showAll[a].substring(0, 2) + '">' + showAll[a] + "</option>");
            return c
        })
    }
}
$(document).ready(function() {
        $(".next").click(nextStep), $(".back").click(backStep), $("#choose-profile-btn").click(function() {
            $("#choose-profile-input").click()
        }), $("#choose-profile-input").change(function() {
            readURL(this), $("#upload-profile-btn").css("display", "inline-block")
        }), $("#upload-profile-btn").click(function() {
            $("#form-profile-pic").submit(), $("#upload-profile-btn").prop("disabled", !0), $("#upload-profile-btn").html("กำลังอัพโหลด...")
        }), $("#upload_target").load(function() {
            var a = $("#upload_target").contents().find("status").html();
            "success" == a && ($("#upload-profile-btn").css("display", "none"), $("#upload-profile-btn").prop("disabled", !1))
        }), $("#choose-question-btn").click(function() {
            $("#choose-question-input").click()
        }), $("#choose-question-input").change(function() {
            $("#upload-question-btn").css("display", "inline-block")
        }), $("#upload-question-btn").click(function() {
            $("#form-question-pic").submit(), $("#upload-question-btn").prop("disabled", !0), $("#upload-question-btn").html("กำลังอัพโหลด...")
        }), $("#upload_question_target").load(function() {
            var a = $("#upload_question_target").contents().find("status").html();
            "success" == a && ($("#upload-question-btn").css("display", "none"), $("#upload-question-btn").prop("disabled", !1), $("#uploadMT").html(function() {
                return "อัพโหลดไฟล์แล้ว"
            }))
        })
    }),
    function(a, b, c) {
        var d, e = a.getElementsByTagName(b)[0];
        a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = "//connect.facebook.net/en_US/sdk.js", e.parentNode.insertBefore(d, e))
    }(document, "script", "facebook-jssdk"), window.fbAsyncInit = function() {
        FB.init({
            appId: "1074500879292053",
            cookie: !0,
            xfbml: !0,
            version: "v2.5"
        })
    };
var facebook, registrantID, facebookID, questionID = new Array(10),
    questionName = new Array(10),
    provinces = new Array(77);
$(document).ready(function() {
    $("#school_province").keyup(function() {
        for (var a = 0, b = $("#school_province").val(), c = "", e = 0; e < provinces.length && !(a > 4); e++) {
            customLength = b.length;
            for (var f = 0; f < provinces[e].length && !(customLength > provinces[e].length); f++) {
                if (b == provinces[e].substr(f, customLength)) {
                    c += '<div  onclick = "insertProvince(this.innerHTML,1)">' + provinces[e] + "</div>", a++;
                    break
                }
                customLength++
            }
        }
        $("#province_show1").html(function() {
            return c
        })
    }), $("#province").keyup(function() {
        for (var a = 0, b = $("#province").val(), c = "", e = 0; e < provinces.length && !(a > 4); e++) {
            customLength = b.length;
            for (var f = 0; f < provinces[e].length && !(customLength > provinces[e].length); f++) {
                if (b == provinces[e].substr(f, customLength)) {
                    c += '<div  onclick = "insertProvince(this.innerHTML,2)">' + provinces[e] + "</div>", a++;
                    break
                }
                customLength++
            }
        }
        $("#province_show2").html(function() {
            return c
        })
    })
}), $(document).ready(function() {
    $("#school").keyup(function() {
        $.ajax({
            url: "URL was removed for security reason",
            type: "POST",
            dataType: "json",
            data: {
                school: $("#school").val()
            },
            success: function(a) {
                var b = "";
                $("#hah").html(function() {
                    return $round = 0, a.school.forEach(function(a, c) {
                        $round++ < 4 && (b += '<div  onclick = "insertSchool(this.innerHTML)">' + a + "</div>")
                    }), b
                })
            }
        })
    })
});
var IT = ["IT - Information Technology", "MT - Multimedia Techonology", "BI - Business Information"],
    ENG = ["AE - Automotive Engineering", "EE - Electrical Engineering", "CE - Computer Engineering", "IE - Industrial Engineering", "PE - Production Engineering"],
    BA = ["BJ - Business Japanese", "CM - Creative Marketing", "LM - Logistic and Supply Chain Management", "HR - Human Resourcing", "IB - International Business", "IM - Industrial Management", "AC - Accounting"],
    showAll, facultySelect;
$(document).ready(function() {
    $("#finish").click(function() {
        confirm("ยืนยันอีกครั้ง (ไม่สามารถแก้ไขข้อมูลได้แล้ว)") && ($("#close").hide(), $("#finish").hide(), $("#Head").html(function() {
            return "สมัครเสร็จสิ้น"
        }), $("#goMain").show(), $.ajax({
            url: "URL was removed for security reason",
            type: "POST",
            data: {
                id: registrantID
            },
            dataType: "json"
        }))
    })
});
