import { Card, Col, Row } from "antd"
import './style.css'
import CenteredCarousel from "../../common/carousal"
import android_std from "../../assets/images/android_studio.png"
import vscode from "../../assets/images/vscode.png"
import github from "../../assets/images/github.png"
import postman from "../../assets/images/postman.png"
import confluence from "../../assets/images/confluence.png"
import jira from "../../assets/images/jira.png"
import mongodb from "../../assets/images/mongodb.png"
import wrkbench from "../../assets/images/wrkbench.png"


export const SoftwareKnown = () => {

    const software = [
        {
            name: "",
            description: " Proficient in using Git, a distributed version control system, and GitHub, a platform for hosting and managing Git repositories. Experienced in performing version control operations such as branching, merging, and resolving conflicts. Skilled in collaborating with teams through pull requests, code reviews, and issue tracking.",
            image: github
        },
        {
            name: "",
            description: "Proficient in using Visual Studio Code, a versatile and powerful code editor. Experienced in leveraging its extensive range of extensions, integrated terminal, and debugging capabilities to streamline development workflows across multiple programming languages. Skilled in customizing the editor to enhance productivity and efficiency in coding tasks.",
            image: vscode
        },
        {
            name: "",
            description: "Proficient in using Android Studio, the official IDE for Android app development. Experienced in utilizing its comprehensive suite of tools, including the integrated debugger, emulator, and layout editor, to design, develop, and test Android applications. Skilled in managing Gradle build systems, integrating third-party libraries, and optimizing app performance.",
            image: android_std
        },
        {
            name: "",
            description: "Proficient in using Postman, a collaborative API development platform. Experienced in creating, testing, and documenting RESTful APIs. Skilled in utilizing Postman’s features such as collections, environment variables, and automated testing with Newman. Adept at integrating Postman with CI/CD pipelines to ensure consistent API quality and performance.",
            image: postman
        },
        {
            name: "",
            description: "Proficient in using Confluence, a collaborative workspace software by Atlassian. Experienced in creating and managing documentation, knowledge bases, and project wikis. Skilled in organizing content with pages, spaces, and templates, mentions, and task assignments. Adept at integrating Confluence with other tools like Jira to streamline project management and enhance team productivity.",
            image: confluence
        },
        {
            name: "",
            description: "Proficient in using Jira Software, a project management tool by Atlassian. Experienced in creating and managing project backlogs, sprints, and workflows. Skilled in tracking issues, bugs, and user stories, and utilizing advanced reporting and dashboard features to monitor project progress. Adept at configuring Jira for agile methodologies, including Scrum and Kanban, to enhance team collaboration and productivity.",
            image: jira
        },
        {
            name: "",
            description: "Proficient in using MongoDB Compass, a graphical user interface (GUI) for MongoDB. Experienced in visualizing and interacting with MongoDB data, querying and aggregating data with intuitive tools, and optimizing database performance through index management. Skilled in understanding database schema, executing ad-hoc queries, and exploring data structures for efficient development and troubleshooting.",
            image: mongodb
        },
        {
            name: "",
            description: "Proficient in using SQL Workbench, a cross-platform SQL client tool. Experienced in connecting to various relational databases, executing SQL queries, and managing database schemas and tables. Skilled in generating reports, exporting/importing data, and optimizing SQL queries for improved database performance. Adept at utilizing SQL Workbench's features to streamline database management and enhance data analysis capabilities.",
            image: wrkbench
        }
        ]

    return (
        <Row className="fullWidth">
            <Col span={24}>
                <Row justify='center'>
                    <Col span={24} className="tittle">
                        Software Known
                    </Col>
                </Row>
                
                    <Row justify='center' className="rowPddingMarging" gutter={28}>
                    <CenteredCarousel items={software}/>
                    </Row>

            </Col>
        </Row>
    )
}