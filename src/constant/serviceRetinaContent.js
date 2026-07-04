export const SERVICE_RETINA_CONTENT = {
    banner: {
        hero: {
            image: {
                src: "/assets/Service/Retina/retina-banner.png",
                alt: "",
            },
            nav: {
                rightSlot: "book",
                navTheme: "light",
                cardBg: "white",
            },
        },
        explainer: {
            title: "What is Retina Care?",
            paragraphs: [
                "Retina care focuses on diagnosing and treating diseases that affect the retina, macula, and blood vessels at the back of the eye.",
                "The retina receives light and sends visual signals to the brain.",
                "When the retina is affected by diabetes, aging, injury, inflammation, or other eye conditions, vision may become blurred, distorted, or reduced.",
            ],

            image: {
                src: "/assets/Service/Retina/retinahero.png",
                alt: "Normal eye alignment and retina eye comparison",
            },
        },
    },

    symptoms: {
        title: "Symptoms you may notice",
        description:
            "Retina problems may not always cause pain, but they can affect vision in different ways. Do not ignore sudden or repeated vision changes.",
        note:
            "Vision may become unclear in one or both eyes, either gradually or suddenly.",
        image: {
            src: "/assets/Service/Retina/Rectangle 10.png",
            alt: "Retina eye examination",
        },
        items: [
            { number: "01", text: "Sudden blurred Vision" },
            { number: "02", text: "Floaters in vision" },
            { number: "03", text: "Flashes of light" },

        ],
    },

    causes: {
        title: "What can lead to Retina Problems?",
        description:
            "Retinal diseases can develop due to medical conditions, aging, eye power, injury, or changes in the eye’s blood vessels.",
        items: [
            {
                number: "01",
                title: "Diabetes (Diabetic Retinopathy)",
                image: "/assets/Service/Retina/lead1.png",
            },
            {
                number: "02",
                title: "High Blood Pressure",
                image: "/assets/Service/Retina/lead2.png",
            },
            {
                number: "03",
                title: "Aging",
                image: "/assets/Service/Retina/lead3.png",
            },
            {
                number: "04",
                title: "High Myopia",
                image: "/assets/Service/Retina/lead4.png",
            },
            {
                number: "05",
                title: "Eye Injury",
                image: "/assets/Service/Retina/lead5.png",
            },
            {
                number: "06",
                title: "Family History",
                image: "/assets/Service/Retina/lead6.png",
            },
        ],
    },

    types: {
        title: "Common Retina Conditions",
        description:
            "Retinal conditions can affect different parts of the retina. Identifying the exact problem helps plan the right treatment.",
        image: {
            src: "/assets/Service/Retina/typesofretina.png",
            mobileSrc: "/assets/Service/Retina/typesofretina.png",
            alt: "Eye drops being applied during retina care",
        },
        controls: {
            previousAriaLabel: "Previous retina type",
            nextAriaLabel: "Next retina type",
        },
        slides: [
            {
                id: "Diabetic Retinopathy",
                title: "Diabetic Retinopathy",
                description: "Diabetic retinopathy occurs when diabetes damages the blood vessels in the retina.",
                image: "/assets/Service/Retina/diabetic.png",
            },
            {
                id: "Retina Tear or Hole",
                title: "Retina Tear or Hole",
                description: "Retinal detachment happens when the retina separates from its normal position.",
                image: "/assets/Service/Retina/tear.png",
            },
            {
                id: "Retinal Detachment",
                title: "Retinal Detachment",
                description: "A retinal tear or hole can develop due to pulling on the retina, high myopia, or aging changes.",
                image: "/assets/Service/Retina/retinal.png",
            },
        ],
    },

    diagnosis: {
        title: "How Retina Problems Are Diagnosed",
        paragraphs: [
            "A retina evaluation includes a detailed examination of the back of the eye, supported by advanced imaging tests when needed.",
        ],
        media: [
            {
                title: "Cover Test",
                image: "/assets/Service/squint/diagnosed_image1.png",
                alt: "Cover test illustration",
            },
            {
                title: "Corneal Light Reflex Test",
                image: "/assets/Service/squint/diagnosed_image2.png",
                alt: "Corneal light reflex test illustration",
            },
            {
                title: "Visual Acuity Test",
                image: "/assets/Service/squint/diagnosed_image4.png",
                alt: "Visual acuity test illustration",
            },
        ],
        treatments: [
            {
                number: "1.",
                title: "Dilated Retina Examination",
                description:
                    "This test measures the pressure inside the eye. High eye pressure is an important risk factor for glaucoma.",
                image: "/assets/Service/retina/dilated.png",
                alt: "Dilated retina examination for retina diagnosis",
            },
            {
                number: "2.",
                title: "Visual Acuity Test",
                description:
                    "A bright light is shone directly into the eyes. The specialist observes where the light reflects off your pupils to check if your eyes are pointing at the same spot.",
                image: "/assets/Service/retina/visual.png",
                alt: "Visual acuity test for retina diagnosis",
            },
            {
                number: "3.",
                title: "Fundus Photography",
                description:
                    "The optic nerve is checked for signs of damage, thinning, or structural changes.",
                image: "/assets/Service/retina/fundus.png",
                alt: "Fundus Photography test for retina diagnosis",
            },
            {
                number: "4.",
                title: "OCT Scan",
                description:
                    "OCT helps assess the thickness of the optic nerve fiber layer and detect early glaucoma-related changes.",
                image: "/assets/Service/retina/union.png",
                alt: "OCT Scan test for retina diagnosis",
                highlighted: true,
            },
        ],
    },
    clinicalExpertise: {
        title: "Clinical expertise",
        intro: "Retina care at Pixel Eye Hospital is provided by experienced retina specialists using advanced retinal imaging, laser treatments, and microsurgical expertise to preserve vision.",
        cardBg: "/assets/Service/cataract/clinicbg.png",
        cardBgAlt: "Pixel Eye clinic background",
        doctors: [
            {
                name: "Dr. Abdul Rasheed",
                description: "MD (AIIMS)\nCataract, Refractive & Squint Surgeon",
                image: "/assets/Service/Dr. Abdul Rasheed.png",
                imageAlt: "Dr. Abdul Rasheed",
                buttonText: "View Doctor Profiles",
                buttonLink: "/doctors",
                imagePosition: "left"
            },
            {
                name: "Dr. Krishna Poojita",
                description: "MBBS, DNB (Ophthalmology), MRCS (Edinburgh), FICO (UK), FPRS (Narayana Nethralaya), Cataract & Refractive Surgeon",
                image: "/assets/Service/Retina/dr-krishna-poojita 1.png",
                imageAlt: "Dr. Krishna Poojita",
                buttonText: "View Doctor Profiles",
                buttonLink: "/doctors",
                imagePosition: "right"
            }
        ]
    },
    faq: {
        title: "FAQs",
        image: "/assets/Service/cataract/faq.png",
        imageAlt: "Retina FAQ consultation",
        note: "For personalised information about retina treatment, retinal scans, diabetic retinopathy, retinal detachment, or other retinal conditions, book an appointment with our retina specialists. Early diagnosis plays a key role in protecting your vision.",
        items: [
            {
                id: "warning-signs-of-retina-disease",
                question: "What are the warning signs of retina disease?",
                answer: "Warning signs include floaters (specks, threads, or cobweb-like shapes in your vision), flashes of light, blurred or distorted central vision, dark or empty areas in your field of vision, and a shadow or curtain-like block over your peripheral vision.",
            },
            {
                id: "when-to-see-retina-specialist-immediately",
                question: "When should I see a retina specialist immediately?",
                answer: "You should seek immediate medical attention if you experience a sudden increase in floaters or flashes of light, a shadow or dark curtain covering a portion of your vision, or sudden, painless vision loss in one or both eyes.",
            },
            {
                id: "what-are-floaters-in-vision",
                question: "What are floaters in vision?",
                answer: "Floaters are tiny specks, threads, or cobwebs that drift across your field of vision. They are caused by small clumps of gel or cells casting shadows on the retina from inside the gel-like fluid (vitreous) that fills your eye.",
            },
            {
                id: "what-do-flashes-of-light-mean",
                question: "What do flashes of light in vision mean?",
                answer: "Flashes of light occur when the gel inside your eye pulls or rubs against the retina. This mechanical stimulation causes you to perceive flashes or streaks of light. It is a key warning sign of a potential retinal tear or detachment.",
            },
            {
                id: "can-diabetes-affect-retina",
                question: "Can diabetes affect the retina?",
                answer: "Yes, diabetes can damage the fragile blood vessels of the retina, a condition known as diabetic retinopathy. It can lead to fluid leaking, swelling in the macula (macular edema), or abnormal blood vessel growth, causing significant vision loss if left untreated.",
            },
            {
                id: "is-retinal-detachment-emergency",
                question: "Is retinal detachment an emergency?",
                answer: "Yes, retinal detachment is a critical medical emergency. Without prompt surgical treatment to reattach the retina, it can lead to permanent, irreversible vision loss.",
            },
            {
                id: "what-is-oct-scan-for-retina",
                question: "What is an OCT scan for retina?",
                answer: "Optical Coherence Tomography (OCT) is a non-invasive, advanced imaging test. It uses light waves to take high-resolution cross-section pictures of your retina, allowing specialists to measure each layer's thickness and detect fluid or damage.",
            },
            {
                id: "how-often-should-retina-patients-come-follow-up",
                question: "How often should retina patients come for follow-up?",
                answer: "Follow-up frequency varies widely depending on your specific condition and treatment. Some chronic cases may require visits every few weeks or months, while stable patients may only need an evaluation once or twice a year.",
            },
            {
                id: "can-vision-loss-be-reversed",
                question: "Can vision loss from retina disease be reversed?",
                answer: "In some cases, prompt treatment of conditions like retinal tears, detachment, or macular edema can restore or improve vision. However, chronic or advanced damage may only be stabilized to prevent further loss rather than fully reversed.",
            },
            {
                id: "how-often-should-diabetic-patients-get-retina-check-up",
                question: "How often should diabetic patients get a retina check-up?",
                answer: "Diabetic patients should undergo a comprehensive dilated retina examination at least once a year, or more frequently if signs of diabetic retinopathy are already present.",
            },
            {
                id: "can-retina-problems-happen-without-pain",
                question: "Can retina problems happen without pain?",
                answer: "Yes, the vast majority of retinal problems are completely painless because the retina itself does not contain pain-sensing nerve fibers. This is why paying attention to visual changes like floaters, flashes, or blurriness is critical.",
            },
        ],
    },
    rememberRecommend: {
        titleLines: ["patient experiences"],
        description:
            "From patients who have already taken their first step forward clearer vision.",
        testimonials: [
            {
                id: "remember-1",
                text: "The Retina procedure was quick, safe, and well-explained. Truly professional care.",
                name: "S. Ramesh",
                rating: "4.5",
                profileImage: {
                    src: "/assets/About/cardimg1.png",
                    alt: "Patient profile image 1",
                },
                backgroundImage: "/assets/About/remembercard.png",
            },
            {
                id: "remember-2",
                text: "The Retina procedure was quick, safe, and well-explained. Truly professional care.",
                name: "S. Ramesh",
                rating: "4.5",
                profileImage: {
                    src: "/assets/About/cardimg2.png",
                    alt: "Patient profile image 2",
                },
                backgroundImage: "/assets/About/remembercard.png",
            },
            {
                id: "remember-3",
                text: "The Retina procedure was quick, safe, and well-explained. Truly professional care.",
                name: "S. Ramesh",
                rating: "4.5",
                profileImage: {
                    src: "/assets/About/cardimg3.png",
                    alt: "Patient profile image 3",
                },
                backgroundImage: "/assets/About/remembercard.png",
            },
        ],
    },
};