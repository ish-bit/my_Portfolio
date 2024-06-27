import warehouse from '../../assets/images/warehouse.png'
import fph from '../../assets/images/fph.png'
import bib from '../../assets/images/bib.png'


export const Smartcosmos = {
    id:"Smartcosmos",
    name:"Digitalizing Physical Assets",
    H1:"Automating Track and Trace through Digitization of Physical Assets",
    introduction:"We have implemented a streamlined solution for digitising physical products, enabling automatic tracing, brand protection, and enhanced customer experiences. This revamped system ensures transparency and traceability from factories to warehouses, stores, and beyond. The solution eliminates the need for coding with each new consumer by replacing the previous fixed processes, reducing operational and infrastructure costs. The rearchitected implementation facilitates transformational in-store and online interactive experiences for sustained consumer and partner engagement throughout the product lifecycle.",
    problem:"A key challenge involved designing adaptable workflows to cater to diverse use cases in the digitization of track and trace. The existing system, reliant on fixed processes coded for each new consumer, utilized an industrialized PC with wired RFID readers for asset digitization endpoints, limiting its applicability in various factory scenarios. This approach led to substantial operational and infrastructure costs. The solution was rearchitected to address these limitations. Notably, the implementation now seamlessly supports Bluetooth-enabled RFID readers connected to ruggedized handheld devices and network RFID readers. This enhancement ensures greater flexibility in usage across different factory settings while significantly reducing operational and infrastructure expenses.",
    solution:"Implementing a modular, monolithic Saas model has successfully streamlined operations and significantly reduced infrastructure costs. The cloud-based system seamlessly supports on-premises RFID network readers, simplifying operational complexities, while the introduction of mobile-controlled RFID readers enhances flexibility, broadening support for a diverse range of use cases. The design, featuring a configurable workflow, facilitates rapid onboarding of customers with unique workflow requirements. Utilising a polyglot persistent architecture effectively addresses varied data storage needs. A well-executed strategic customer migration plan ensures the smooth transition of customer data from the existing system to the new solution, guaranteeing a seamless and efficient implementation process.",
    conclusion:"Delivered within six months, our end-to-end solution is now in active use by manufacturers and suppliers across Europe, Asia, and America. The implementation resulted in a significant reduction in monthly cloud infrastructure costs, dropping from over USD 8,000 to less than USD 1000. This comprehensive solution seamlessly supports all digitization, tracking, and trace use cases, serving as a versatile and efficient tool for diverse applications. The widespread adoption of the system highlights its effectiveness and reliability in meeting the global needs of manufacturers and suppliers.",
    image: warehouse,
}

export const FPH = {
    id:"FPH",
    H1:"An Active Health Monitoring Approach for Guaranteed Peace of Mind",
    name:"Health Monitoring Solution",
    introduction:"It can be difficult for families to stay in touch with their elderly parents when they live far away and to make sure they are doing well. This creative solution, created to close this gap, consists of a solid backend system, an easy-to-use mobile app, and an attractive web site. It enables proactive care for the elderly by offering real-time health monitoring. This approach helps organisations manage elder care while also providing reassurance to family members who live far away. This approach is a step towards improving the quality of life for the elderly and their carers because of its emphasis on accessibility and timely health information.",
    problem:"Several challenges were encountered in developing this solution, including the seamless integration of various health devices with the mobile application, particularly when these devices are shared among multiple users. Ensuring the security of sensitive health data was paramount, alongside the need to maintain functionality in areas of inconsistent network availability. We also focused on devising a flexible subscription model, which varies based on the number of beneficiaries and devices utilized. Additionally, the implementation of a multi-country payment gateway and accurate tax calculation posed significant complexities, given the diverse financial regulations and tax structures across different regions. These challenges required careful consideration and innovative solutions to ensure a robust, secure, and user-friendly system.",
    solution:"The solution was meticulously architected and designed to minimize cloud and maintenance costs during its initial rollout, ensuring scalability to handle increasing loads effectively. An innovative approach was employed to manage dynamic subscription plans across various countries, adapting to diverse needs and regulations. To further reduce future maintenance costs, Quality Assurance (QA) automation was strategically implemented. Additionally. a comprehensive monitoring and alerting system was put in place, ensuring proactive management of any system issues on the cloud, thereby maintaining optimal performance and reliability.",
    conclusion:"The product was successfully launched on cloud platforms and mobile application stores without any incidents, enabling the client to begin customer onboarding immediately from day one. This robust and responsive solution led to high customer satisfaction. Furthermore, the implementation of hassle-free, automated continuous deployment processes ensured smooth and seamless upgrades, contributing to the overall efficiency and effectiveness of the product upgrades.",
    image: fph
}

export const Bibliotheca = {
    id:"Bibliotheca",
    H1:"Transforming Libraries with Scalable Application",
    name:"Libraries DIgitization",
    introduction:"By enabling near real-time interaction with devices incorporated into automated library systems, this state-of-the-art software as a service (SaaS) offering revolutionises the management and automation of many library functions. Libraries now have centralised management over device settings and health diagnostics thanks to this all-inclusive solution. The software helps library administrators make well-informed decisions by providing priceless insights into how users utilise gadgets and library functions. Moreover, it acts as a spark for creativity, enabling libraries to launch new products into the market. Our solution, taken as a whole, improves user and staff engagement by revolutionising the digital and physical library experiences.", 
    problem:"The primary hurdle we faced was creating and implementing a scalable solution capable of supporting the extensive network of devices in over 25,000 libraries worldwide. Each device generates frequent events, capturing every user interaction. Complicating matters, the proprietary message formats from these devices required a design that could efficiently transform and store them into a unified format in near real time. Additionally, meeting the challenge of providing near real-time alerts for device health and other critical functions further underscored the complexity of our task.",
    solution:"This necessitated the design and architecture of a data-intensive application capable of seamlessly handling and processing dynamic bursts of events in near real-time. Our solution involved the implementation of auto-scaling message brokers, processing pipelines, and a distributed data storage strategy, supported by a horizontally scalable cloud infrastructure. To enhance adaptability, each organization benefited from a highly configurable alerting, automation, and notification mechanism. Furthermore, for each device type, we implemented dynamic configuration view generation, ensuring a tailored and efficient approach to meet specific requirements",
    conclusion:"The application was meticulously architected, resulting in a notable reduction in deployment costs without compromising horizontal scalability. The product has been launched in America and Europe with plans to expand to libraries worldwide in the next few years. With an anticipated average processing capability of 2500 device events per second, the solution stands poised to efficiently meet the dynamic demands of libraries across diverse regions.",
    image: bib
}

export const H = {
    id:"FPH",
    H1:"An Active Health Monitoring Approach for Guaranteed Peace of Mind",
    name:"Health Monitoring Solution",
    introduction:"It can be difficult for families to stay in touch with their elderly parents when they live far away and to make sure they are doing well. This creative solution, created to close this gap, consists of a solid backend system, an easy-to-use mobile app, and an attractive web site. It enables proactive care for the elderly by offering real-time health monitoring. This approach helps organisations manage elder care while also providing reassurance to family members who live far away. This approach is a step towards improving the quality of life for the elderly and their carers because of its emphasis on accessibility and timely health information.",
    problem:"",
    solution:"",
    conclusion:""
}

export const P = {
    id:"FPH",
    H1:"An Active Health Monitoring Approach for Guaranteed Peace of Mind",
    name:"Health Monitoring Solution",
    introduction:"It can be difficult for families to stay in touch with their elderly parents when they live far away and to make sure they are doing well. This creative solution, created to close this gap, consists of a solid backend system, an easy-to-use mobile app, and an attractive web site. It enables proactive care for the elderly by offering real-time health monitoring. This approach helps organisations manage elder care while also providing reassurance to family members who live far away. This approach is a step towards improving the quality of life for the elderly and their carers because of its emphasis on accessibility and timely health information.",
    problem:"",
    solution:"",
    conclusion:""
}