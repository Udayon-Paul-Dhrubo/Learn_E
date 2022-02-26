/*
 Navicat Premium Data Transfer

 Source Server         : Oracle
 Source Server Type    : Oracle
 Source Server Version : 190000
 Source Host           : localhost:1521
 Source Schema         : C##LEARN

 Target Server Type    : Oracle
 Target Server Version : 190000
 File Encoding         : 65001

 Date: 24/02/2022 20:46:19
*/


-- ----------------------------
-- Table structure for Completion
-- ----------------------------
DROP TABLE "C##LEARN"."Completion";
CREATE TABLE "C##LEARN"."Completion" (
  "Course_ID" NUMBER VISIBLE NOT NULL,
  "Student_ID" NUMBER VISIBLE NOT NULL,
  "Content_ID" NUMBER VISIBLE NOT NULL,
  "Module_ID" NUMBER VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Completion
-- ----------------------------
INSERT INTO "C##LEARN"."Completion" VALUES ('207', '201805112', '2079017', '2070001');
INSERT INTO "C##LEARN"."Completion" VALUES ('198', '236', '1981230', '1980001');
INSERT INTO "C##LEARN"."Completion" VALUES ('169', '236', '1698015', '1690001');
INSERT INTO "C##LEARN"."Completion" VALUES ('169', '236', '1690003', '1690001');
INSERT INTO "C##LEARN"."Completion" VALUES ('198', '236', '1988015', '1980001');
INSERT INTO "C##LEARN"."Completion" VALUES ('207', '201805112', '2078815', '2070001');
INSERT INTO "C##LEARN"."Completion" VALUES ('207', '201805121', '2078815', '2070001');
INSERT INTO "C##LEARN"."Completion" VALUES ('207', '201805122', '2078815', '2070001');
INSERT INTO "C##LEARN"."Completion" VALUES ('169', '201805121', '1698015', '1690001');
INSERT INTO "C##LEARN"."Completion" VALUES ('169', '201805121', '1690003', '1690001');
INSERT INTO "C##LEARN"."Completion" VALUES ('208', '201805112', '2158016', '2150016');
INSERT INTO "C##LEARN"."Completion" VALUES ('217', '201805112', '2158018', '2150035');
INSERT INTO "C##LEARN"."Completion" VALUES ('169', '201805112', '1690003', '1690001');
INSERT INTO "C##LEARN"."Completion" VALUES ('207', '201805112', '2159018', '2150008');

-- ----------------------------
-- Table structure for Course
-- ----------------------------
DROP TABLE "C##LEARN"."Course";
CREATE TABLE "C##LEARN"."Course" (
  "course_id" NUMBER VISIBLE NOT NULL,
  "Title" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "Description" VARCHAR2(255 BYTE) VISIBLE,
  "Outcome" VARCHAR2(255 BYTE) VISIBLE,
  "Price" NUMBER VISIBLE,
  "Offer" VARCHAR2(255 BYTE) VISIBLE,
  "total_Enrolled" VARCHAR2(255 BYTE) VISIBLE,
  "Rating" VARCHAR2(255 BYTE) VISIBLE,
  "Catagory" VARCHAR2(255 BYTE) VISIBLE,
  "Image" VARCHAR2(255 BYTE) VISIBLE,
  "Level" VARCHAR2(255 BYTE) VISIBLE,
  "RatedBy" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Course
-- ----------------------------
INSERT INTO "C##LEARN"."Course" VALUES ('219', 'Graphic Design', 'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques', NULL, '3000', NULL, '1', '1.5', 'Web Design', 'course-1.jpg', 'Beginner', '2');
INSERT INTO "C##LEARN"."Course" VALUES ('218', 'Web Application Technologies and Django', 'In this course, you''ll explore the basic structure of a web application, and how a web browser interacts with a web server. You''ll be introduced to the Hypertext Transfer Protocol (HTTP) request/response cycle, including GET/POST/Redirect. ', NULL, '2000', NULL, '2', '4', 'Web Design', 'web1.png', 'Advanced', '1');
INSERT INTO "C##LEARN"."Course" VALUES ('217', 'Data Science: Foundations using R Specialization', 'This Course covers foundational data science tools and techniques, including getting, cleaning, and exploring data, programming in R, and conducting reproducible research', NULL, '3000', NULL, '3', '3.5', 'Data Science', 'data-science1.jpg', 'Intermidiate', '2');
INSERT INTO "C##LEARN"."Course" VALUES ('208', 'Beginner''s Guide to Java', 'This course introduces computer programming using the JAVA programming language with object-oriented programming principles. Emphasis is placed on event-driven programming methods, including creating and manipulating objects.', NULL, '1000', NULL, '45', '4', 'Object Oriented Programming', 'java1.jpeg', 'Beginner', '40');
INSERT INTO "C##LEARN"."Course" VALUES ('108', 'Partial Differential Equation', 'This course aims to teach the basics of Partial differential equations (PDEs), a subject that touches on many branches of pure mathematics, applied mathematics, as well as physics and applied science', NULL, '2000', NULL, '20', '3', 'A P Calculas', 'course-2.jpg', 'Intermidiate', '15');
INSERT INTO "C##LEARN"."Course" VALUES ('198', 'JavaScript', 'The JavaScript Specialist course focuses on the fundamental concepts of the JavaScript language. This course will empower you with the skills to design client-side, platform-independent solutions that greatly increase the value of your Web site', NULL, '1000', '4', '101', '3.05', 'Web Design', 'javascirpt1.png', 'Beginner', '60');
INSERT INTO "C##LEARN"."Course" VALUES ('207', 'Programming with C++', 'C++ is a statically typed, compiled, general-purpose, case-sensitive, free-form programming language that supports procedural, object-oriented, and generic programming.', NULL, '2000', NULL, '90', '2', 'Object Oriented Programming', 'course-4.jpg', 'Advanced', '80');
INSERT INTO "C##LEARN"."Course" VALUES ('215', 'Complete SQL Bootcamp', 'In this course, you learn how to optimize the accessibility and maintenance of data with the SQL programming language, and gain a solid foundation for building, querying, and manipulating databases', NULL, '3000', NULL, '190', '5', 'Database Management', 'database1.jpg', 'Intermidiate', '123');
INSERT INTO "C##LEARN"."Course" VALUES ('169', 'Introduction to AC Machine Design', 'This course presents a thorough treatment of AC machine design, starting from basic electromagnetic principles and continuing through the various design aspects of an induction machine', NULL, '1500', NULL, '46', '2', 'Electrical and Electronics Engeneering', 'course-5.jpg', 'Beginner', '30');
INSERT INTO "C##LEARN"."Course" VALUES ('107', 'Ordinary Differential Equation', 'Ordinary differential equations (ODE) are a fundamental part of the mathematical vocabulary used to describe natural phenomena. The course emphasizes classical methods for finding exact solution formulas', NULL, '2000', NULL, '61', '3', 'A P Calculas', 'course-3.jpg', 'Beginner', '28');
INSERT INTO "C##LEARN"."Course" VALUES ('216', 'Deep Learning', 'The Deep Learning course is a foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. ', NULL, '3000', NULL, '1', '2', 'Data Science', 'data-science2.jpg', 'Advanced', '1');
INSERT INTO "C##LEARN"."Course" VALUES ('220', 'Biostaistics in Public Health', 'This course is intended for public health and healthcare  professionals, researchers, data analysts, social workers, and others who need a comprehensive concepts-centric biostatistics primer.', NULL, '2000', NULL, '1', '4', 'Bio Statistics', 'bio1.jpg', 'Advanced', '1');

-- ----------------------------
-- Table structure for CourseModules
-- ----------------------------
DROP TABLE "C##LEARN"."CourseModules";
CREATE TABLE "C##LEARN"."CourseModules" (
  "Course_ID" NUMBER VISIBLE NOT NULL,
  "Module_ID" NUMBER VISIBLE NOT NULL,
  "Serial" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of CourseModules
-- ----------------------------
INSERT INTO "C##LEARN"."CourseModules" VALUES ('207', '2150007', '5');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150018', '3');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150016', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150017', '2');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150019', '4');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150020', '5');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150021', '6');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150022', '7');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150023', '8');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150024', '9');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150025', '10');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150026', '11');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150027', '12');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150028', '13');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('208', '2150029', '14');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('218', '2150032', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('218', '2150033', '2');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('218', '2150034', '3');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('217', '2150035', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('220', '2150036', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('220', '2150037', '2');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('198', '2150038', '3');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('198', '2150039', '4');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('198', '2150040', '5');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('198', '2150041', '6');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('198', '2150042', '7');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('207', '2150008', '6');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('207', '2150030', '7');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('207', '2150031', '8');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('198', '1980001', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('198', '1980002', '2');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('107', '2070001', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('107', '1070002', '2');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('169', '1690001', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('169', '1690002', '2');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('215', '2150001', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('215', '2150002', '2');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('207', '2070001', '1');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('207', '2070002', '2');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('207', '2150005', '3');
INSERT INTO "C##LEARN"."CourseModules" VALUES ('207', '2150006', '4');

-- ----------------------------
-- Table structure for CreateCourse
-- ----------------------------
DROP TABLE "C##LEARN"."CreateCourse";
CREATE TABLE "C##LEARN"."CreateCourse" (
  "Teacher_ID" NUMBER VISIBLE NOT NULL,
  "Course_ID" NUMBER VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of CreateCourse
-- ----------------------------
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878009', '207');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878009', '216');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878009', '217');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878009', '218');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878009', '219');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878009', '220');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878010', '198');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878010', '208');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878090', '215');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1878094', '169');
INSERT INTO "C##LEARN"."CreateCourse" VALUES ('1879089', '107');

-- ----------------------------
-- Table structure for FAQ
-- ----------------------------
DROP TABLE "C##LEARN"."FAQ";
CREATE TABLE "C##LEARN"."FAQ" (
  "Question_ID" NUMBER VISIBLE NOT NULL,
  "Course_ID" NUMBER VISIBLE NOT NULL,
  "Student_ID" NUMBER VISIBLE NOT NULL,
  "Question" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "Answer" VARCHAR2(255 BYTE) VISIBLE,
  "Teacher_ID" NUMBER VISIBLE,
  "AskingDate" DATE VISIBLE,
  "AnswerDate" DATE VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of FAQ
-- ----------------------------
INSERT INTO "C##LEARN"."FAQ" VALUES ('1', '207', '201805110', 'What''s the purpose of using this pointer?', 'it makes thngs easier', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."FAQ" VALUES ('2', '215', '201805109', 'How to grant previlege to a new User?', NULL, NULL, NULL, NULL);
INSERT INTO "C##LEARN"."FAQ" VALUES ('3', '208', '201805112', 'I don''t understand this topic very well', 'Exactly where you are having the problem?', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."FAQ" VALUES ('4', '207', '201805121', 'Can I use friends functions instead of member functions?', 'Of course, you can.', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."FAQ" VALUES ('5', '207', '201805112', 'What''s classfying object?', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for Grades
-- ----------------------------
DROP TABLE "C##LEARN"."Grades";
CREATE TABLE "C##LEARN"."Grades" (
  "Quiz_ID" NUMBER VISIBLE NOT NULL,
  "Student_ID" NUMBER VISIBLE NOT NULL,
  "Total_Questions" NUMBER VISIBLE,
  "Correct_Answers" NUMBER VISIBLE,
  "Course_ID" NUMBER VISIBLE NOT NULL,
  "Topic" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Grades
-- ----------------------------
INSERT INTO "C##LEARN"."Grades" VALUES ('1698015', '236', '2', '1', '169', NULL);
INSERT INTO "C##LEARN"."Grades" VALUES ('1988015', '236', '2', '0', '198', NULL);
INSERT INTO "C##LEARN"."Grades" VALUES ('2078815', '201805112', '2', '2', '207', NULL);
INSERT INTO "C##LEARN"."Grades" VALUES ('2078815', '201805121', '2', '2', '207', NULL);
INSERT INTO "C##LEARN"."Grades" VALUES ('2078815', '201805122', '2', '2', '207', NULL);
INSERT INTO "C##LEARN"."Grades" VALUES ('1698015', '201805121', '2', '2', '169', NULL);
INSERT INTO "C##LEARN"."Grades" VALUES ('2158016', '201805112', '2', '2', '208', NULL);
INSERT INTO "C##LEARN"."Grades" VALUES ('2158017', '201805112', '2', '0', '207', NULL);
INSERT INTO "C##LEARN"."Grades" VALUES ('2158018', '201805112', '2', '2', '217', NULL);

-- ----------------------------
-- Table structure for Module
-- ----------------------------
DROP TABLE "C##LEARN"."Module";
CREATE TABLE "C##LEARN"."Module" (
  "Module_ID" NUMBER VISIBLE NOT NULL,
  "Teacher_ID" NUMBER VISIBLE,
  "Description" VARCHAR2(255 BYTE) VISIBLE,
  "Topics" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Module
-- ----------------------------
INSERT INTO "C##LEARN"."Module" VALUES ('2150007', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150010', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150011', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150012', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150014', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150013', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150015', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150016', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150017', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150018', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150019', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150020', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150021', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150022', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150023', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150024', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150025', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150026', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150027', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150028', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150029', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150032', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150033', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150034', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150035', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150036', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150037', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150038', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150039', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150040', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150041', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150042', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150008', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150009', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150030', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150031', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2080001', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2080002', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2070001', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2070002', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('1980002', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('1980001', '1878010', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150001', '1878090', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150002', '1878090', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('1690001', '1878094', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('1690002', '1878094', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('1070001', '1879089', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('1070002', '1879089', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150003', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150004', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150006', '1878009', NULL, NULL);
INSERT INTO "C##LEARN"."Module" VALUES ('2150005', '1878009', NULL, NULL);

-- ----------------------------
-- Table structure for PurchaseHistory
-- ----------------------------
DROP TABLE "C##LEARN"."PurchaseHistory";
CREATE TABLE "C##LEARN"."PurchaseHistory" (
  "Student_ID" NUMBER VISIBLE NOT NULL,
  "Course_ID" NUMBER VISIBLE NOT NULL,
  "ContentCompleted" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of PurchaseHistory
-- ----------------------------
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805109', '107', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '207', '2');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805121', '208', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('236', '207', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '108', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('236', '198', '2');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '219', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '107', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('236', '169', '2');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805121', '207', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805122', '207', '1');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805121', '169', '2');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805109', '207', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805110', '198', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805111', '207', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805111', '215', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '169', '1');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '198', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '208', '1');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805113', '107', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805119', '207', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '220', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805121', '217', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '217', '1');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805112', '218', '0');
INSERT INTO "C##LEARN"."PurchaseHistory" VALUES ('201805121', '198', '0');

-- ----------------------------
-- Table structure for Quiz_Content
-- ----------------------------
DROP TABLE "C##LEARN"."Quiz_Content";
CREATE TABLE "C##LEARN"."Quiz_Content" (
  "QuizContent_ID" NUMBER VISIBLE NOT NULL,
  "Module_ID" NUMBER VISIBLE,
  "Question" VARCHAR2(255 BYTE) VISIBLE,
  "Option1" VARCHAR2(255 BYTE) VISIBLE,
  "Option2" VARCHAR2(255 BYTE) VISIBLE,
  "Option3" VARCHAR2(255 BYTE) VISIBLE,
  "Option4" VARCHAR2(255 BYTE) VISIBLE,
  "Answer" VARCHAR2(255 BYTE) VISIBLE,
  "Question_ID" NUMBER VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Quiz_Content
-- ----------------------------
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158016', '2150016', 'What''s the color of sky?', 'blue ', 'pink', 'brown', 'red', '1', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158016', '2150016', 'what''s the color of wind?', 'violet', 'red', 'blue', 'has not color', '4', '2');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158017', '2070002', 'What''s the color of sky?', 'blue ', 'pink', 'brown', 'red', '1', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158017', '2070002', 'what''s the color of wind?', 'violet', 'red', 'blue', 'has not color', '4', '2');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158018', '2150035', 'What is the use of the <noscript> tag in Javascript?', 'The contents are displayed by non JS Based browsers', 'Clears all the cookies', 'Both A & B', 'None of the Above', '1', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158018', '2150035', 'When an operator’s value is NULL, the typeof returned by the unary operator is', 'Boolean', 'Undefined', 'Object', 'Integer', '3', '2');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158019', '1980002', 'The "function" and " var" are known as:', 'Keywords', 'Data types', 'Declaration statements', 'Prototypes', '3', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158019', '1980002', 'When interpreter encounters an empty statements, what it will do:', 'Shows warning', 'Prompts to complete the statement', 'Throws an error
', 'Ignores the statements', '4', '2');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158015', '2150001', 'How to print errors in DBMS output?', 'SHOW ERRORS;', 'DISPLAY ERRORS;', 'PRINT ERRORS;', 'GET ERRORS;', '1', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('1988015', '1980001', 'In case of a varivale that may change, what should we use?', 'Const', 'Let', 'Var', 'option 2 & 3', '4', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('1698015', '1690001', 'How can we control the speed of motors?', 'Via field resistance', 'Armeture Resistance', 'Armature Voltage', 'All of them', '4', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('1078815', '1070001', 'If Mdx+Ndy=0, have the form fydx+gxdy=0 the I.F.', '1/Mx-Ny', '1/Mx+Ny', '1/Mx-Ny(not 0)', '1/Mx-Ny=0', '3', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2078815', '2070001', 'Which of the following is the correct syntax of including a user defined header files in C++?', '#include [userdefined]', '#include “userdefined”', ') #include <userdefined.h>', ' #include <userdefined>', '2', '1');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2158015', '2150001', 'What is the command to sort the rows?', 'SORT BY', 'ORDER BY', 'ORDER ON', 'SORT ON', '2', '2');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('1988015', '1980001', 'Which of the following methods can be used to display data in some form using Javascript?', 'document.write()', 'console.log()', 'window.alert()', 'all of the above', '2', '2');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('1698015', '1690001', 'What is terminal characteristics of DC motors?', 'Ea VS IL', 'Ea VS If', 'Wm Vs Torque', 'Ea Vs Rf', '1', '2');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('1078815', '1070001', 'What is the laplce tranform of the first derivative of a function y(t) with respect to t : y’(t)?', 'sy(0) – Y(s)', ' sY(s) – y(0)', 's2 Y(s)-sy(0)-y''(0)', 's2 Y(s)-sy''(0)-y(0)', '2', '2');
INSERT INTO "C##LEARN"."Quiz_Content" VALUES ('2078815', '2070001', ' Which of the following is a correct identifier in C++?', 'VAR_1234', '$var_name', ' 7VARNAME', '7var_name', '1', '2');

-- ----------------------------
-- Table structure for Rating
-- ----------------------------
DROP TABLE "C##LEARN"."Rating";
CREATE TABLE "C##LEARN"."Rating" (
  "Course_ID" NUMBER VISIBLE NOT NULL,
  "Student_ID" NUMBER VISIBLE NOT NULL,
  "Rating" VARCHAR2(255 BYTE) VISIBLE,
  "Review" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Rating
-- ----------------------------
INSERT INTO "C##LEARN"."Rating" VALUES ('169', '201805112', '4', 'The course Materials were easy to understand');
INSERT INTO "C##LEARN"."Rating" VALUES ('219', '201805112', '3', 'Nice Videos, very understable');
INSERT INTO "C##LEARN"."Rating" VALUES ('107', '201805112', '2', 'Complicated Maths but explained easily');
INSERT INTO "C##LEARN"."Rating" VALUES ('108', '201805112', '1', 'The course Materials were easy to understand');
INSERT INTO "C##LEARN"."Rating" VALUES ('220', '201805112', '4', 'FREFR');
INSERT INTO "C##LEARN"."Rating" VALUES ('207', '201805109', '3', 'The course was very comprehensive and easy to understand');
INSERT INTO "C##LEARN"."Rating" VALUES ('217', '201805121', '3', 'FRET');
INSERT INTO "C##LEARN"."Rating" VALUES ('198', '201805112', '4', 'The instructor were very understanding as to guide us among the most basic concepts. All in all, a very good course.');
INSERT INTO "C##LEARN"."Rating" VALUES ('198', '201805121', '3.5', 'I had no problem even though it was my first time learning JavaScript. Would definitely recommend.');
INSERT INTO "C##LEARN"."Rating" VALUES ('198', '236', '4', 'The videos contains detailed explanations of complicated topics- was very understandable. I would say taking this course was very much worth it.');
INSERT INTO "C##LEARN"."Rating" VALUES ('207', '201805111', '4', 'I enjoyed the course and learned a lot from it. The content is well organised');
INSERT INTO "C##LEARN"."Rating" VALUES ('207', '201805115', '4', 'Nicely taught course.The instructors made sure that they are giving the information in a way that won''t make me confused');

-- ----------------------------
-- Table structure for Student
-- ----------------------------
DROP TABLE "C##LEARN"."Student";
CREATE TABLE "C##LEARN"."Student" (
  "Student_id" NUMBER VISIBLE NOT NULL,
  "Courses_Taken" NUMBER VISIBLE,
  "Testimonial" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Student
-- ----------------------------
INSERT INTO "C##LEARN"."Student" VALUES ('201805123', NULL, NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805121', NULL, NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('236', '1', 'Very helpful for lerning');
INSERT INTO "C##LEARN"."Student" VALUES ('201805109', '2', 'Effective teaching method');
INSERT INTO "C##LEARN"."Student" VALUES ('201805110', '1', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805111', '1', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805112', '3', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805113', '5', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805114', '2', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805115', '1', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805120', '1', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805116', '1', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805117', '1', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805118', '1', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805119', '1', NULL);
INSERT INTO "C##LEARN"."Student" VALUES ('201805122', NULL, NULL);

-- ----------------------------
-- Table structure for Teacher
-- ----------------------------
DROP TABLE "C##LEARN"."Teacher";
CREATE TABLE "C##LEARN"."Teacher" (
  "Teacher_ID" NUMBER VISIBLE NOT NULL,
  "AvgRating" NUMBER VISIBLE,
  "totalCourses" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Teacher
-- ----------------------------
INSERT INTO "C##LEARN"."Teacher" VALUES ('1878009', '4', '10');
INSERT INTO "C##LEARN"."Teacher" VALUES ('1878010', '2', '12');
INSERT INTO "C##LEARN"."Teacher" VALUES ('1878090', '3', '3');
INSERT INTO "C##LEARN"."Teacher" VALUES ('1878094', '1', '3');
INSERT INTO "C##LEARN"."Teacher" VALUES ('1879089', '5', '1');

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE "C##LEARN"."User";
CREATE TABLE "C##LEARN"."User" (
  "User_ID" NUMBER VISIBLE NOT NULL,
  "Name" VARCHAR2(255 BYTE) VISIBLE,
  "Username" VARCHAR2(255 BYTE) VISIBLE,
  "Email" VARCHAR2(255 BYTE) VISIBLE,
  "Address" VARCHAR2(255 BYTE) VISIBLE,
  "Contact" VARCHAR2(255 BYTE) VISIBLE,
  "Bikash_No" NUMBER VISIBLE,
  "Password" VARCHAR2(255 BYTE) VISIBLE,
  "image" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of User
-- ----------------------------
INSERT INTO "C##LEARN"."User" VALUES ('201805123', NULL, 'bugy', 'hgrte@gmail.com', NULL, NULL, NULL, '1234', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805121', 'ARK', 'Mrinmoyee Ark', 'ark@gmail.com', NULL, NULL, NULL, '1234', '5c556bf3-acfd-4173-aacf-6513f0eedcba.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('236', 'Faria Monir', 'Nijhum', 'faria@gmail.com', NULL, NULL, '67789899', '1234', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805109', 'Udayon ', 'paul', 'upaul@gmail.com', '1/2H, kim lane, Rampura', '0191128912891', '43456543', '1234', 'testimonial-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805110', 'Anika', 'Monir', 'amim@gmail.com', '22/h/1,Mirpur', '019888667', '6578985365', '123', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805111', 'Redwan', 'Raju', 'redwan@gmail.com', '292/Y-1,Cumilla Road', '01892227373', '4657889654567', '1234', 'testimonial-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805112', 'asif rayhan', 'Haider', 'asif@gmail.com', '343 nandail Road', '018999223', '3245678', '1234', 'team-2.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805113', 'Swarna', 'Saha', 'swarna@gmail.com', '67 Batashi Road', '0179992728238', '2345678', '1234', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('1878009', 'Roni Das', 'Das', 'rony@gmail.com', 'winter line, dhaka', '01239933', '324567890', '1234', 'testimonial-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('1878010', 'Hossain', 'Helal', 'helal@gmail.com', '6 brisket, likash Road', '01872348', '36347289101', '1234', 'xstudent_01.png.pagespeed.ic.756JwMcqdq.png');
INSERT INTO "C##LEARN"."User" VALUES ('1878090', 'Jinan', 'Jash', 'jash@gmail.com', 'hiliak 32, jashan road', '01234445', '199987263', '1234', 'testimonial-3.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('1878094', 'Sunan', 'Fokir', 'sunan@gmailcom', '45 hella, dynam', '-098765', '9876543', '1234', 'testimonial-4.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('1879089', 'Eshan', 'Farhan', 'farhan@gmail.com', '12 house road, Mirpur', '9876543', '98765434', '1234', 'user.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805114', 'Kalam', 'Kalam Mojumder', 'kalam@gmail.com', NULL, NULL, NULL, '1234', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805115', 'Rajun', 'Rajun Dilip', 'Raja@gmail.com', NULL, NULL, NULL, '1234', 'team-2.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805120', 'Hillary', 'Hillary Clinton', 'hillary@gmail.com', NULL, NULL, NULL, '1234', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805116', 'Malala', 'Malala Yusufjai', 'malala@gmail.com', NULL, NULL, NULL, '1234', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805117', 'Nishat', 'Nishat Sithy', 'nishat@gmail.com', NULL, NULL, NULL, '1234', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805118', 'Khodeja', 'Khodeja Begum', 'khadija@gmail.com', NULL, NULL, NULL, '1234', 'team-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805119', 'Kader', 'Ehsanul Kader', 'Kader@gmail.com', NULL, NULL, NULL, '1234', 'red-flat-shape-green-fluid-260nw-testimonial-1.jpg');
INSERT INTO "C##LEARN"."User" VALUES ('201805122', NULL, 'mac dreamy', 'dreamy@gmail.com', NULL, NULL, NULL, '1234', 'about.jpg');

-- ----------------------------
-- Table structure for Video_Content
-- ----------------------------
DROP TABLE "C##LEARN"."Video_Content";
CREATE TABLE "C##LEARN"."Video_Content" (
  "VideoContent_ID" NUMBER VISIBLE NOT NULL,
  "Topic" VARCHAR2(255 BYTE) VISIBLE,
  "Description" VARCHAR2(255 BYTE) VISIBLE,
  "File_ID" NUMBER VISIBLE,
  "Module_ID" NUMBER VISIBLE,
  "Video" VARCHAR2(255 BYTE) VISIBLE,
  "Duration" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of Video_Content
-- ----------------------------
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159017', 'Lerning AVL trees', 'Height Variant through trees', NULL, '2150032', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159018', 'eeee', 'eeeeee', NULL, '2150008', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159019', 'erthyu', 'wertyui', NULL, '2150037', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159020', 'ertyu', 'wert', NULL, '2150034', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159021', 'Scope', 'Scope :  means of variable access.', NULL, '1980002', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159022', 'IIFE (Immediately Invoked Function Expression) ', 'IIFE (Immediately Invoked Function Expression) ', NULL, '2150039', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159023', 'Callbacks', 'Callbacks', NULL, '2150038', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159024', ' Hoisting', ' Hoisting', NULL, '2150040', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159025', 'Closures', 'Closures', NULL, '2150041', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159026', 'Async & Await', 'Async & Await', NULL, '2150042', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159016', 'Something', 'CRUCIO', NULL, '2150006', 'file_example_MP4_1280_10MG.mp4', NULL);
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2159015', 'Aggregation', 'Joining', '890', '2150001', 'sample-mp4-file.mp4', '10 min');
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2079016', 'OOP Properties', 'Encapsulation', '122', '2070002', 'sample-mp4-file.mp4', '12 min');
INSERT INTO "C##LEARN"."Video_Content" VALUES ('1981230', 'Functions', 'Arrow_Functions', '7884', '1980001', 'sample-mp4-file.mp4', '10 min');
INSERT INTO "C##LEARN"."Video_Content" VALUES ('1078909', 'Exact Equations', 'Homogenous Equations', '494', '1070001', 'sample-mp4-file.mp4', '13 min');
INSERT INTO "C##LEARN"."Video_Content" VALUES ('1690003', 'Synchronus Motors', 'Effect of Field Current', '8993', '1690001', 'sample-mp4-file.mp4', '15 min');
INSERT INTO "C##LEARN"."Video_Content" VALUES ('2079017', 'OOP Properties', 'Inheritance', '890', '2070001', 'sample-mp4-file.mp4', '31 min');

-- ----------------------------
-- Function structure for GET_PROGRESS
-- ----------------------------
CREATE OR REPLACE
FUNCTION "C##LEARN"."GET_PROGRESS" AS
BEGIN
SELECT COUNT(*) INTO TOTAL_VIDEOS FROM "CourseModules" JOIN "Video_Content" USING("Module_ID") WHERE "Course_ID"= COURSE_ID ;
SELECT COUNT(*) INTO TOTAL_QUIZES FROM "CourseModules" JOIN "Quiz_Content" USING("Module_ID") WHERE "Course_ID"=COURSE_ID ;
SELECT "ContentCompleted" INTO FINISHED_CONTENT FROM "PurchaseHistory" WHERE "Student_ID"=STUDENT_ID AND "Course_ID"=COURSE_ID;
TOTAL_CONTENT :=TOTAL_VIDEOS+TOTAL_QUIZES;
DBMS_OUTPUT.PUT_LINE(TOTAL_CONTENT );
PROGRESS := (FINISHED_CONTENT*100)/TOTAL_CONTENT;
RETURN ROUND(PROGRESS,2) ; 
EXCEPTION
WHEN NO_DATA_FOUND THEN
RETURN 0 ;
WHEN TOO_MANY_ROWS THEN
RETURN 0 ;
WHEN OTHERS THEN
RETURN 0 ;
END ;
/

-- ----------------------------
-- Function structure for GET_SENIOR_EMPLOYE
-- ----------------------------
CREATE OR REPLACE
FUNCTION "C##LEARN"."GET_SENIOR_EMPLOYE" AS
BEGIN
 SELECT HIRE_DATE INTO JDATE
 FROM EMPLOYEES
 WHERE EMPLOYEE_ID = EID ;
 YEARS := (MONTHS_BETWEEN(SYSDATE, JDATE) / 12) ;
 IF YEARS >= 10 THEN
 MSG := 'The employee worked 10 years or more' ;
 ELSE
 MSG := 'The employee worked less than 10 years' ;
 END IF ;
RETURN MSG ; --return the message
EXCEPTION
--you must return value from this section also
WHEN NO_DATA_FOUND THEN
RETURN 'No employee found.' ;
WHEN TOO_MANY_ROWS THEN
RETURN 'More than one employee found.' ;
WHEN OTHERS THEN
RETURN 'Some unknown error occurred.' ;
END ;
/

-- ----------------------------
-- Function structure for GET_SENIOR_EMPLOYEE
-- ----------------------------
CREATE OR REPLACE
FUNCTION "C##LEARN"."GET_SENIOR_EMPLOYEE" AS
BEGIN
 SELECT HIRE_DATE INTO JDATE
 FROM EMPLOYEES
 WHERE EMPLOYEE_ID = EID ;
 YEARS := (MONTHS_BETWEEN(SYSDATE, JDATE) / 12) ;
 IF YEARS >= 10 THEN
 MSG := 'The employee worked 10 years or more' ;
 ELSE
 MSG := 'The employee worked less than 10 years' ;
 END IF ;
RETURN MSG ; --return the message
EXCEPTION
--you must return value from this section also
WHEN NO_DATA_FOUND THEN
RETURN 'No employee found.' ;
WHEN TOO_MANY_ROWS THEN
RETURN 'More than one employee found.' ;
WHEN OTHERS THEN
RETURN 'Some unknown error occurred.' ;
END ;
/

-- ----------------------------
-- Function structure for TOTAL_CONTENT_IN_A_COURSE
-- ----------------------------
CREATE OR REPLACE
FUNCTION "C##LEARN"."TOTAL_CONTENT_IN_A_COURSE" AS
BEGIN
SELECT COUNT(*) INTO TOTAL_VIDEOS FROM "CourseModules" JOIN "Video_Content" USING("Module_ID") WHERE "Course_ID"= COURSE_ID ;
SELECT COUNT(*) INTO TOTAL_QUIZES FROM "CourseModules" JOIN "Quiz_Content" USING("Module_ID") WHERE "Course_ID"=COURSE_ID ;
TOTAL_CONTENT :=TOTAL_VIDEOS+TOTAL_QUIZES;
RETURN TOTAL_CONTENT ; 
EXCEPTION
WHEN NO_DATA_FOUND THEN
RETURN -1 ;
WHEN TOO_MANY_ROWS THEN
RETURN -1 ;
WHEN OTHERS THEN
RETURN -1 ;
END ;
/

-- ----------------------------
-- Function structure for VIEWDETAILS
-- ----------------------------
CREATE OR REPLACE
FUNCTION "C##LEARN"."VIEWDETAILS" AS
BEGIN
 SELECT HIRE_DATE INTO JDATE 
 FROM EMPLOYEES
 WHERE EMPLOYEE_ID=EID;
 YEARS:=(MONTHS_BETWEEN(SYSDATE, JDATE)/12);
 IF YEARS >=10 THEN
 MESSAGE := '10 YEARS';
 ELSE
 MESSAGE :='LESS THAN 10 YEARS';
 END IF;
 RETURN MESSAGE;
EXCEPTION 
 WHEN NO_DATA_FOUND THEN
 RETURN 'NO EMPLOYEE WITH THIS ID';
 WHEN TOO_MANY_ROWS THEN
 RETURN 'MORE THAN ONE EMPLOYEE FOUND';
 WHEN OTHERS THEN
 RETURN 'SOME ERROR OCCURED'
END;
/

-- ----------------------------
-- Primary Key structure for table Completion
-- ----------------------------
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007936" PRIMARY KEY ("Content_ID", "Student_ID");

-- ----------------------------
-- Checks structure for table Completion
-- ----------------------------
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007756" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007757" CHECK ("Student_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007758" CHECK ("Module_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007874" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007934" CHECK ("Module_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007935" CHECK ("Student_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Triggers structure for table Completion
-- ----------------------------
CREATE TRIGGER "C##LEARN"."UPDATE_CONTENT" AFTER INSERT ON "C##LEARN"."Completion" REFERENCING OLD AS "OLD" NEW AS "NEW" FOR EACH ROW 
DECLARE
V_COURSEID NUMBER;
V_STUDENTID NUMBER;
BEGIN
V_COURSEID := :NEW."Course_ID" ;
V_STUDENTID := :NEW."Student_ID" ;
UPDATE "PurchaseHistory" SET "ContentCompleted"="ContentCompleted"+1 WHERE "Student_ID"=V_STUDENTID AND
 "Course_ID"=V_COURSEID;
END ;
/

-- ----------------------------
-- Primary Key structure for table Course
-- ----------------------------
ALTER TABLE "C##LEARN"."Course" ADD CONSTRAINT "SYS_C007844" PRIMARY KEY ("course_id");

-- ----------------------------
-- Checks structure for table Course
-- ----------------------------
ALTER TABLE "C##LEARN"."Course" ADD CONSTRAINT "SYS_C007759" CHECK ("course_id" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Course" ADD CONSTRAINT "SYS_C007760" CHECK ("Title" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Course" ADD CONSTRAINT "SYS_C007843" CHECK ("course_id" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Course" ADD CONSTRAINT "SYS_C007846" CHECK ("Title" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table CourseModules
-- ----------------------------
ALTER TABLE "C##LEARN"."CourseModules" ADD CONSTRAINT "SYS_C007923" PRIMARY KEY ("Course_ID", "Module_ID");

-- ----------------------------
-- Checks structure for table CourseModules
-- ----------------------------
ALTER TABLE "C##LEARN"."CourseModules" ADD CONSTRAINT "SYS_C007761" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."CourseModules" ADD CONSTRAINT "SYS_C007762" CHECK ("Module_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."CourseModules" ADD CONSTRAINT "SYS_C007922" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table CreateCourse
-- ----------------------------
ALTER TABLE "C##LEARN"."CreateCourse" ADD CONSTRAINT "SYS_C007955" PRIMARY KEY ("Teacher_ID", "Course_ID");

-- ----------------------------
-- Checks structure for table CreateCourse
-- ----------------------------
ALTER TABLE "C##LEARN"."CreateCourse" ADD CONSTRAINT "SYS_C007763" CHECK ("Teacher_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."CreateCourse" ADD CONSTRAINT "SYS_C007764" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."CreateCourse" ADD CONSTRAINT "SYS_C007953" CHECK ("Teacher_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."CreateCourse" ADD CONSTRAINT "SYS_C007954" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table FAQ
-- ----------------------------
ALTER TABLE "C##LEARN"."FAQ" ADD CONSTRAINT "SYS_C007838" PRIMARY KEY ("Question_ID");

-- ----------------------------
-- Checks structure for table FAQ
-- ----------------------------
ALTER TABLE "C##LEARN"."FAQ" ADD CONSTRAINT "SYS_C007835" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."FAQ" ADD CONSTRAINT "SYS_C007836" CHECK ("Student_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."FAQ" ADD CONSTRAINT "SYS_C007837" CHECK ("Question" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table Grades
-- ----------------------------
ALTER TABLE "C##LEARN"."Grades" ADD CONSTRAINT "SYS_C017844" PRIMARY KEY ("Quiz_ID", "Student_ID", "Course_ID");

-- ----------------------------
-- Checks structure for table Grades
-- ----------------------------
ALTER TABLE "C##LEARN"."Grades" ADD CONSTRAINT "SYS_C017843" CHECK ("Quiz_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table Module
-- ----------------------------
ALTER TABLE "C##LEARN"."Module" ADD CONSTRAINT "SYS_C007859" PRIMARY KEY ("Module_ID");

-- ----------------------------
-- Checks structure for table Module
-- ----------------------------
ALTER TABLE "C##LEARN"."Module" ADD CONSTRAINT "SYS_C007769" CHECK ("Module_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Module" ADD CONSTRAINT "SYS_C007857" CHECK ("Module_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table PurchaseHistory
-- ----------------------------
ALTER TABLE "C##LEARN"."PurchaseHistory" ADD CONSTRAINT "SYS_C007873" PRIMARY KEY ("Student_ID", "Course_ID");

-- ----------------------------
-- Checks structure for table PurchaseHistory
-- ----------------------------
ALTER TABLE "C##LEARN"."PurchaseHistory" ADD CONSTRAINT "SYS_C007770" CHECK ("Student_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."PurchaseHistory" ADD CONSTRAINT "SYS_C007771" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."PurchaseHistory" ADD CONSTRAINT "SYS_C007871" CHECK ("Student_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."PurchaseHistory" ADD CONSTRAINT "SYS_C007872" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Triggers structure for table PurchaseHistory
-- ----------------------------
CREATE TRIGGER "C##LEARN"."UPDATE_TOTAL_ENROLLED" AFTER INSERT ON "C##LEARN"."PurchaseHistory" REFERENCING OLD AS "OLD" NEW AS "NEW" FOR EACH ROW 
DECLARE
V_COURSEID NUMBER;
BEGIN
V_COURSEID := :NEW."Course_ID" ;
UPDATE "Course" SET "total_Enrolled"="total_Enrolled"+1 WHERE
 "course_id"=V_COURSEID;
END ;
/

-- ----------------------------
-- Primary Key structure for table Quiz_Content
-- ----------------------------
ALTER TABLE "C##LEARN"."Quiz_Content" ADD CONSTRAINT "SYS_C008186" PRIMARY KEY ("QuizContent_ID", "Question_ID");

-- ----------------------------
-- Checks structure for table Quiz_Content
-- ----------------------------
ALTER TABLE "C##LEARN"."Quiz_Content" ADD CONSTRAINT "SYS_C007772" CHECK ("QuizContent_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Quiz_Content" ADD CONSTRAINT "SYS_C007773" CHECK ("Question_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Quiz_Content" ADD CONSTRAINT "SYS_C008185" CHECK ("QuizContent_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table Rating
-- ----------------------------
ALTER TABLE "C##LEARN"."Rating" ADD CONSTRAINT "SYS_C007877" PRIMARY KEY ("Course_ID", "Student_ID");

-- ----------------------------
-- Checks structure for table Rating
-- ----------------------------
ALTER TABLE "C##LEARN"."Rating" ADD CONSTRAINT "SYS_C007774" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Rating" ADD CONSTRAINT "SYS_C007775" CHECK ("Student_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Rating" ADD CONSTRAINT "SYS_C007876" CHECK ("Course_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Triggers structure for table Rating
-- ----------------------------
CREATE TRIGGER "C##LEARN"."UPDATE_RATING" AFTER INSERT ON "C##LEARN"."Rating" REFERENCING OLD AS "OLD" NEW AS "NEW" FOR EACH ROW 
DECLARE
V_RATING NUMBER;
V_COURSEID NUMBER;
V_RATEDBY NUMBER;

BEGIN
V_COURSEID := :NEW."Course_ID" ;
V_RATING := :NEW."Rating" ;
SELECT "RatedBy" INTO V_RATEDBY FROM "Course" WHERE "course_id"=V_COURSEID;
UPDATE "Course" SET "Rating"=ROUND((("Rating"*V_RATEDBY+V_RATING)/(V_RATEDBY+1)),2), "RatedBy"="RatedBy"+1  WHERE
 "course_id"=V_COURSEID;
END ;
/

-- ----------------------------
-- Primary Key structure for table Student
-- ----------------------------
ALTER TABLE "C##LEARN"."Student" ADD CONSTRAINT "SYS_C007851" PRIMARY KEY ("Student_id");

-- ----------------------------
-- Checks structure for table Student
-- ----------------------------
ALTER TABLE "C##LEARN"."Student" ADD CONSTRAINT "SYS_C007776" CHECK ("Student_id" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Student" ADD CONSTRAINT "SYS_C007850" CHECK ("Student_id" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table Teacher
-- ----------------------------
ALTER TABLE "C##LEARN"."Teacher" ADD CONSTRAINT "SYS_C007889" PRIMARY KEY ("Teacher_ID");

-- ----------------------------
-- Checks structure for table Teacher
-- ----------------------------
ALTER TABLE "C##LEARN"."Teacher" ADD CONSTRAINT "SYS_C007777" CHECK ("Teacher_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Teacher" ADD CONSTRAINT "SYS_C007845" CHECK ("Teacher_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table User
-- ----------------------------
ALTER TABLE "C##LEARN"."User" ADD CONSTRAINT "SYS_C007897" PRIMARY KEY ("User_ID");

-- ----------------------------
-- Checks structure for table User
-- ----------------------------
ALTER TABLE "C##LEARN"."User" ADD CONSTRAINT "SYS_C007778" CHECK ("User_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."User" ADD CONSTRAINT "SYS_C007886" CHECK ("User_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table Video_Content
-- ----------------------------
ALTER TABLE "C##LEARN"."Video_Content" ADD CONSTRAINT "SYS_C007861" PRIMARY KEY ("VideoContent_ID");

-- ----------------------------
-- Checks structure for table Video_Content
-- ----------------------------
ALTER TABLE "C##LEARN"."Video_Content" ADD CONSTRAINT "SYS_C007779" CHECK ("VideoContent_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Video_Content" ADD CONSTRAINT "SYS_C007860" CHECK ("VideoContent_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table Completion
-- ----------------------------
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007939" FOREIGN KEY ("Student_ID") REFERENCES "C##LEARN"."Student" ("Student_id") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."Completion" ADD CONSTRAINT "SYS_C007940" FOREIGN KEY ("Module_ID") REFERENCES "C##LEARN"."Module" ("Module_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table CourseModules
-- ----------------------------
ALTER TABLE "C##LEARN"."CourseModules" ADD CONSTRAINT "SYS_C007925" FOREIGN KEY ("Course_ID") REFERENCES "C##LEARN"."Course" ("course_id") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."CourseModules" ADD CONSTRAINT "SYS_C007926" FOREIGN KEY ("Module_ID") REFERENCES "C##LEARN"."Module" ("Module_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table CreateCourse
-- ----------------------------
ALTER TABLE "C##LEARN"."CreateCourse" ADD CONSTRAINT "SYS_C007956" FOREIGN KEY ("Teacher_ID") REFERENCES "C##LEARN"."Teacher" ("Teacher_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."CreateCourse" ADD CONSTRAINT "SYS_C007957" FOREIGN KEY ("Course_ID") REFERENCES "C##LEARN"."Course" ("course_id") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table FAQ
-- ----------------------------
ALTER TABLE "C##LEARN"."FAQ" ADD CONSTRAINT "SYS_C007841" FOREIGN KEY ("Student_ID") REFERENCES "C##LEARN"."Student" ("Student_id") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."FAQ" ADD CONSTRAINT "SYS_C007842" FOREIGN KEY ("Teacher_ID") REFERENCES "C##LEARN"."Teacher" ("Teacher_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table Grades
-- ----------------------------
ALTER TABLE "C##LEARN"."Grades" ADD CONSTRAINT "SYS_C007853" FOREIGN KEY ("Student_ID") REFERENCES "C##LEARN"."Student" ("Student_id") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table Module
-- ----------------------------
ALTER TABLE "C##LEARN"."Module" ADD CONSTRAINT "SYS_C007921" FOREIGN KEY ("Teacher_ID") REFERENCES "C##LEARN"."Teacher" ("Teacher_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table PurchaseHistory
-- ----------------------------
ALTER TABLE "C##LEARN"."PurchaseHistory" ADD CONSTRAINT "SYS_C007917" FOREIGN KEY ("Student_ID") REFERENCES "C##LEARN"."Student" ("Student_id") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##LEARN"."PurchaseHistory" ADD CONSTRAINT "SYS_C007919" FOREIGN KEY ("Course_ID") REFERENCES "C##LEARN"."Course" ("course_id") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table Student
-- ----------------------------
ALTER TABLE "C##LEARN"."Student" ADD CONSTRAINT "SYS_C007898" FOREIGN KEY ("Student_id") REFERENCES "C##LEARN"."User" ("User_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table Teacher
-- ----------------------------
ALTER TABLE "C##LEARN"."Teacher" ADD CONSTRAINT "SYS_C007899" FOREIGN KEY ("Teacher_ID") REFERENCES "C##LEARN"."User" ("User_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table Video_Content
-- ----------------------------
ALTER TABLE "C##LEARN"."Video_Content" ADD CONSTRAINT "SYS_C007927" FOREIGN KEY ("Module_ID") REFERENCES "C##LEARN"."Module" ("Module_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
