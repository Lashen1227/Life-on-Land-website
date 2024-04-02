
// Change font size of the page
function changeFontSize(size) {
    document.body.style.fontSize = size;
}

// Change font family of the page
function changeFontFamily(fontFamily) {
    document.body.style.fontFamily = fontFamily;
}


// Change color of the page
function bgcolor(value) {
    document.body.style.backgroundColor = value;
    document.getElementById("viewbg").style.backgroundColor = value;
    document.getElementById("viewbg1").style.backgroundColor = value;
    document.getElementById("viewbg2").style.backgroundColor = value;
    document.getElementById("viewbg3").style.backgroundColor = value;
    document.getElementById("viewbg4").style.backgroundColor = value;
}

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

document.addEventListener("DOMContentLoaded", function() {

    // Variables for Row 1
    const btns = document.querySelectorAll(".btn");
    const popupOverlay = document.getElementById("popup-overlay");
    const closePopup = document.getElementById("close-popup");
    const popupImage = document.getElementById("popup-image");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");

    // Variables for Row 2
    const btns2 = document.querySelectorAll(".btn2");
    const popupOverlay2 = document.getElementById("popup-overlay2");
    const closePopup2 = document.getElementById("close-popup2");
    const popupImage2 = document.getElementById("popup-image2");
    const popupTitle2 = document.getElementById("popup-title2");
    const popupDescription2 = document.getElementById("popup-description2");

    // Variables for Row 3
    const btns3 = document.querySelectorAll(".btn3");
    const popupOverlay3 = document.getElementById("popup-overlay3");
    const closePopup3 = document.getElementById("close-popup3");
    const popupImage3 = document.getElementById("popup-image3");
    const popupTitle3 = document.getElementById("popup-title3");
    const popupDescription3 = document.getElementById("popup-description3");

    // Variables for Row 4
    const btns4 = document.querySelectorAll(".btn4");
    const popupOverlay4 = document.getElementById("popup-overlay4");
    const closePopup4 = document.getElementById("close-popup4");
    const popupImage4 = document.getElementById("popup-image4");
    const popupTitle4 = document.getElementById("popup-title4");
    const popupDescription4 = document.getElementById("popup-description4");

    // Variables for Row 5
    const btns5 = document.querySelectorAll(".btn5");
    const popupOverlay5 = document.getElementById("popup-overlay5");
    const closePopup5 = document.getElementById("close-popup5");
    const popupImage5 = document.getElementById("popup-image5");
    const popupTitle5 = document.getElementById("popup-title5");
    const popupDescription5 = document.getElementById("popup-description5");


    //Row 1 popup discription
    btns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            const card = this.closest(".card");
            const title = card.querySelector("h1").innerText;
            const imageSrc = card.querySelector("img").getAttribute("src");
            let description = "";

            // Get the description based on the index
            switch (index) {
                case 0:
                    description = "The largest terrestrial mammals on Earth are African elephants, including bush and forest kinds.They are recognisable by their giant ears and tusks. Living in matriarchal herds, they use infrasound and a variety of vocalisations to communicate. These herbivores eat a variety of plants and have a long gestation time. They usually give birth to a single calf. Their existence is in danger due to numerous concerns, such as habitat degradation from human expansion, ivory poaching, and confrontations between humans and wildlife. Through community involvement, habitat preservation, and anti-poaching measures, conservation efforts seek to address these issues and protect these magnificent animals, which are essential to the health of ecosystems and Africa's biodiversity.";
                    break;
                case 1:
                    description = "Macaws, large and colourful natives of Central and South America, are recognised for their remarkable plumage and intelligence. They establish close pair connections and use body language and vocalisations to communicate while living in flocks. They eat fruits, seeds, nuts, and occasionally insects. They are omnivores. Macaws face several threats, such as habitat loss from deforestation, the illicit pet trade, and poaching for flesh and feathers. To lessen these risks and guarantee the survival of these incredible birds, which are essential to preserving tropical forest ecosystems and biodiversity, conservation initiatives concentrate on habitat protection, captive breeding programmes, and education.";
                    break;
                case 2:
                    description = "Vibrant and adaptable, grapes are grown in temperate locations worldwide and can be green, red, or purple. They are cultivated for fresh eating, winemaking, and drying as raisins. They are members of the Vitaceae family. Antioxidants, vitamins, and minerals included in grapes provide health advantages like strengthened heart and immune system performance. Trellis systems are used in vineyards to support grapevines, increasing ventilation and sunlight exposure. Throughout the growing season, grapes must be watered often and do best in soils with good drainage. Thompson Seedless, Cabernet Sauvignon, and Chardonnay are common grape types. Grapes are essential to cultures worldwide and are used to produce wine and other gastronomic delights.";
                    break;
                case 3:
                    description = "About 31% of Earth's land surface is covered by forests, which are essential ecosystems that offer various ecological services like carbon storage, oxygen production, and habitat for a wide range of animals. They control the temperature, stop soil erosion, and boost regional economies by providing food, fuel, and tourism. Magnificent natural phenomena known as waterfalls are produced when rivers or streams rush over a steep drop, forming breathtaking cascades. They frequently form in mountainous or rough terrain settings. Waterfalls draw tourists because they provide scenic beauty and leisure activities like swimming and photography. Earth's landscapes would only be complete with forests and waterfalls, which enhance human well-being, biodiversity, and natural beauty.";
                    break;
                case 4:
                    description = "Asia's most recognisable large cats, tigers, have orange fur with black stripes. They are solitary animals that live in various settings, including mangrove swamps, grasslands, and woodlands. Tigers use body language, scent markers, and vocalisations to communicate. Carnivores eat a variety of prey, such as small animals, deer, and wild boar. Tiger populations are threatened by poaching for their skins and bones, habitat degradation from human activity, and confrontations between humans and wildlife. These apex predators are targeted for protection through conservation programmes like community engagement, habitat preservation, and anti-poaching patrols. Tiger conservation is essential for biodiversity and ecosystem health because of their critical role in preserving ecological equilibrium.";
                    break;
                default:
                    description = "Description not available";
            }

            // Set the popup content
            popupImage.style.backgroundImage = `url(${imageSrc})`;
            popupTitle.innerText = title;
            popupDescription.innerText = description;

            // Display the popup
            popupOverlay.style.display = "block";
        });
    });

    closePopup.addEventListener("click", function() {
        // Close the popup
        popupOverlay.style.display = "none";
    });


    //Row 2 popup discription
    btns2.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            const card = this.closest(".card");
            const title = card.querySelector("h1").innerText;
            const imageSrc = card.querySelector("img").getAttribute("src");
            let description = "";

            // Get the description based on the index
            switch (index) {
                case 0:
                    description = "Native to the Eastern Himalayas, red pandas live lonely lives in thick bamboo jungles. Despite their name and likeness to giant pandas, they're not closely related. Bamboo comprises most of their diet, with fruits, insects, and small mammals serving as supplements. With the help of retractable claws, they are agile climbers who spend much time in trees. Being nocturnal by nature, dawn and dusk are when they are most active. Late winter is the breeding season when females give birth to litters of one to four cubs. Conservation activities include habitat preservation and captive breeding programmes to ensure the survival of these species, which are endangered due to habitat loss and poaching";
                    break;
                case 1:
                    description = "Common across Europe, Asia, and North America, robins are distinguished by their bright red breasts and upbeat songs. They live in a variety of environments, such as gardens and woodlands. They eat fruits, seeds, and insects as they are omnivores. To entice females, males frequently mark territory and sing. Simultaneous couples form bonds through intricate rituals of courting. Females construct their mud and grass nests in bushes or trees. Both parents share the role of incubation and chick-raising. Different populations migrate differently; some go south for the winter, while others stay put all year round. The main goals of conservation efforts are to protect natural areas and lessen the effects of threats like habitat loss and climate change.";
                    break;
                case 2:
                    description = "Pandas live in China's bamboo forests and are well-known conservationists. They are primarily herbivorous and can eat up to 26 pounds of bamboo daily. Saved from extinction by habitat destruction, they live alone outside of the mating season. Mothers raise their lone cubs in low birth rates. Pandas' special thumb-like appendages let them hold bamboo. In woodlands, their black and white coats help them blend in. Breeding initiatives and habitat protection are examples of conservation activities. They are solid and agile despite their cute appearance. Conservationists use GPS tracking to keep an eye on their activities. Pandas are a significant source of tourists to China's reserves and serve as a symbol of global conservation efforts.";
                    break;
                case 3:
                    description = "Antarctic symbol, the emperor penguin, can withstand temperatures as low as -40°C. They are the largest penguin species, with a height of almost 1.2 metres. They can withstand severe weather and frigid temperatures and travel up to 100 kilometres to reach their breeding colonies. To keep the eggs warm during incubation, monogamous couples share parenting responsibilities and mate. A few of the difficulties that chicks encounter are predators and inclement weather. Because of their unique adaptations, which include thick feathers and a covering of fat, they can survive in the cold waters where they hunt squid and fish. The main goals of conservation efforts are to lessen the effects of climate change and protect Antarctic habitats.";
                    break;
                case 4:
                    description = "The fantastic transformation process butterflies undergo is metamorphosis: egg, larva (caterpillar), pupa (chrysalis), and adult. They flourish in various global environments, including urban gardens and tropical rainforests. While adults drink nectar to aid in pollination, caterpillars mainly eat vegetation. Their complex wing patterns act as a decoy and a warning to potential predators. Some animals' unique characteristics are migration; they can cover thousands of miles a year. Climate change, pesticides, and habitat loss are among the threats. Habitat preservation and the creation of butterfly-friendly habitats are the main goals of conservation initiatives. Their ecological significance and beauty make them essential emblems for preserving biodiversity.";
                    break;
                default:
                    description = "Description not available";
            }

            // Set the popup content for Row 2
            popupImage2.style.backgroundImage = `url(${imageSrc})`;
            popupTitle2.innerText = title;
            popupDescription2.innerText = description;

            // Display the popup for Row 2
            popupOverlay2.style.display = "block";
        });
    });

    // Event listener to close Row 2 popup
    closePopup2.addEventListener("click", function() {
        popupOverlay2.style.display = "none";
    });


    //Row 3 popup discription
    btns3.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            const card = this.closest(".card");
            const title = card.querySelector("h1").innerText;
            const imageSrc = card.querySelector("img").getAttribute("src");
            let description = "";

            // Get the description based on the index
            switch (index) {
                case 0:
                    description = "The physical characteristics of the Earth's surface, such as mountains, plains, rivers, and coasts, which have been sculpted over millions of years by geological processes, are collectively called landscapes and geography. The biodiversity of Earth is increased by these varied environments, which serve as homes for a vast variety of plants and animals. Geography examines how these features relate to one another spatially and how these linkages affect ecosystems, human societies, and the climate. Knowing geography and landscapes makes it easier for us to appreciate the richness and beauty of our planet, makes resource management and urban planning more accessible, and provides information for environmental conservation initiatives. It also fosters sustainable development and resource stewardship by illuminating the relationships between humans and their surroundings.";
                    break;
                case 1:
                    description = "An essential component of nature, climate and weather shape ecosystems and impact life as we know it. Long-term temperature trends, precipitation, and other meteorological factors that affect ecosystems and biodiversity over time are referred to as a region's \"climate\". The short-term atmospheric conditions that impact everyday activities and events, such as temperature, humidity, wind, and precipitation, are called weather. It is essential to comprehend climate and weather events such as heatwaves, droughts, and hurricanes to plan agriculture, manage natural resources, and lessen the effects of climate change. By researching these variables, scientists can forecast trends, guide policy, and create plans to mitigate and adapt to climate-related issues.";
                    break;
                case 2:
                    description = "Ecology studies interactions between living things and their surroundings, focusing on those interactions involving organisms. Ecosystems are intricate webs of living things that interact together, including the habitats they occupy and the surrounding environment. To keep life on Earth viable, these interdependent systems provide crucial functions like pollination, nutrient cycling, and climate management. Maintaining biodiversity, managing resources sustainably, and conservation efforts depend on understanding ecology and ecosystems. Scientists may create plans to protect ecosystems, increase resistance to environmental changes, and advance the welfare of people and the natural world by researching these complex relationships.";
                    break;
                case 3:
                    description = "Nature's flora and fauna represent the enormous diversity of plant and animal life in ecosystems worldwide. Flora, which encompasses the entire kingdom of plants, from tiny flowers to massive trees, gives many species their home, food, and oxygen. The animal kingdom's fauna, which includes mammals, birds, reptiles, amphibians, and insects, all have distinct functions in maintaining ecological equilibrium. The intricate interactions between the flora and fauna of Earth sustain life, from the majestic elephants of Africa to the minute organisms that live in the soil. In light of biodiversity's significance for ecosystem health, human well-being, and the planet's future, conservation initiatives seek to save and conserve it.";
                    break;
                default:
                    description = "Description not available";
            }

            // Set the popup content for Row 3
            popupImage3.style.backgroundImage = `url(${imageSrc})`;
            popupTitle3.innerText = title;
            popupDescription3.innerText = description;

            // Display the popup for Row 3
            popupOverlay3.style.display = "block";
        });
    });

    // Event listener to close Row 3 popup
    closePopup3.addEventListener("click", function() {
        popupOverlay3.style.display = "none";
    });


    //Row 4 popup discription
    btns4.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            const card = this.closest(".card");
            const title = card.querySelector("h1").innerText;
            const imageSrc = card.querySelector("img").getAttribute("src");
            let description = "";

            // Get the description based on the index
            switch (index) {
                case 0:
                    description = "One of the cornerstones of sustainable agriculture is agroecology, which incorporates ecological concepts with agricultural methods. It strongly emphasises biodiversity, soil health, and natural processes to maximise positive environmental effects while maximising agricultural productivity. Essential techniques include crop rotation, agroforestry, polyculture (different crop planting), and integrated pest management. Agroecological systems foster resistance to pests, illnesses, and climate change by imitating natural ecosystems. Agroecology enhances soil fertility, water retention, and biodiversity by lowering dependency on artificial inputs like fertilisers and pesticides. It provides an all-encompassing approach to farming that is advantageous to both people and the environment, promoting sustainable food production, sustaining rural livelihoods, and aiding in environmental conservation.";
                    break;
                case 1:
                    description = "In sustainable agriculture, soil health is essential for maintaining and improving soil quality for long-term productivity. It emphasises methods to stop erosion, strengthen soil structure, and promote nutrient cycling, such as crop rotation, cover crops, and low tillage. Reducing the need for chemical inputs, various microbial communities found in healthy soils help with insect management and nutrient availability. Preserving the soil's organic matter content helps mitigate the consequences of climate change by promoting carbon sequestration and water retention. Food security is bolstered by sustainable soil management, which also increases agricultural resistance to adverse weather events. Sustainable agriculture guarantees robust, productive, and ecologically friendly farming systems by prioritising soil health.";
                    break;
                case 2:
                    description = "In sustainable agriculture, crop diversity is the practice of growing a variety of plant species to improve food security, ecosystem health, and resilience. It consists of genetically varied cultivars, heirloom varieties, and customary and native crops. Diverse cropping patterns improve soil fertility, lessen the burden of pests and diseases, and encourage pollination and other natural ecosystem processes. Crop rotation, intercropping, and polyculture techniques are encouraged in sustainable agriculture to increase yield while reducing dependency on outside resources. Maintaining crop diversity protects genetic resources and keeps them flexible enough to respond to shifting market demands and environmental changes. Through crop diversification, sustainable agriculture promotes resilience in agricultural systems, biodiversity conservation, and sustainable livelihoods.";
                    break;
                case 3:
                    description = "To maintain agricultural output while minimising environmental impact, water management in sustainable agriculture focuses on effectively using and conserving water resources. Techniques like drip irrigation, rainwater collection, and soil moisture monitoring are used to maximise water utilisation and minimise waste. Sustainable agriculture encourages water-saving techniques like precision irrigation and mulching to reduce the dangers of drought and water scarcity. Agroforestry practices and water-efficient crop types improve soil water retention, lowering runoff and erosion. To ensure that sustainable agriculture remains resilient in the face of changing climate circumstances, integrated water management techniques consider ecosystem needs, equitable distribution, and the preservation of water quality.";
                    break;
                case 4:
                    description = "In sustainable agriculture, community involvement entails farmers, local communities, and stakeholders actively participating in decision-making processes, resource management, and information exchange. It strengthens local ownership of agricultural projects, empowers marginalised communities, and promotes social cohesion. Communities learn about organic farming, agroforestry, water conservation, and other sustainable practices through seminars, training courses, and interactive methods. Initiatives driven by the community enhance food sovereignty, advance fair resource access, and aid rural development. Community engagement in sustainable agriculture encourages group action, social resilience, and sustainable livelihoods for current and future generations by building partnerships and networks.";
                    break;
                default:
                    description = "Description not available";
            }

            // Set the popup content for Row 4
            popupImage4.style.backgroundImage = `url(${imageSrc})`;
            popupTitle4.innerText = title;
            popupDescription4.innerText = description;

            // Display the popup for Row 4
            popupOverlay4.style.display = "block";
        });
    });

    // Event listener to close Row 4 popup
    closePopup4.addEventListener("click", function() {
        popupOverlay4.style.display = "none";
    });


    //Row 5 popup discription
    btns5.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            const card = this.closest(".card");
            const title = card.querySelector("h1").innerText;
            const imageSrc = card.querySelector("img").getAttribute("src");
            let description = "";

            // Get the description based on the index
            switch (index) {
                case 0:
                    description = "By restoring native tree species, encouraging natural regeneration, and creating habitat corridors, reforestation contributes to ecological restoration. The function, structure, and biodiversity of the ecosystem are all helped by this process. Strategic tree planting contributes to restoring natural habitats and offering food and shelter to various wildlife species. In addition to boosting water retention, avoiding erosion, and promoting soil health, ecological restoration is essential for maintaining the overall resilience of ecosystems. Ultimately, it seeks to restore ecosystems that are sustainable, balanced, and home to various plants and animals while reducing environmental deterioration.";
                    break;
                case 1:
                    description = "Climate Change Caused by Reforestation Planting trees to absorb carbon dioxide from the atmosphere, lessen the impact of the greenhouse effect, and fight climate change are examples of mitigation. Trees function as carbon sinks because they store carbon in the soil and their biomass. Reforestation helps control global temperatures and weather patterns by lowering the concentration of greenhouse gases through the restoration of forests and the expansion of tree cover. Furthermore, forests are essential for sustaining biodiversity and hydrological cycles, increasing climate resistance. To combat climate change and meet carbon neutrality targets, reforestation projects are critical to ensuring a sustainable future for future generations.";
                    break;
                case 2:
                    description = "Reforestation contributes to water resource management by improving availability, quality, and regulation. Trees are essential for maintaining soil stability, controlling water flow, preventing erosion, and lowering the likelihood of floods and droughts. As organic sponges, forests collect and filter precipitation, restore groundwater levels, and preserve streamflow. Reforestation contributes to maintaining water supplies for ecosystems and people by restoring degraded areas and watersheds. Sustainable forest management techniques increase water infiltration, decrease sedimentation, and alleviate pollution to preserve the resilience of freshwater ecosystems and secure vital water supplies for both people and wildlife.";
                    break;
                case 3:
                    description = "The socio-economic benefits of reforestation go beyond ecological restoration to include social and economic well-being. Reforestation improves local economies and lowers poverty by generating jobs in forestry, ecotourism, and associated industries. Restored forests support sustainable livelihoods for communities by offering resources like timber, non-timber forest products, and medicinal plants. Reforestation initiatives also frequently incorporate community empowerment and engagement, strengthening social cohesiveness and resilience. Human health and quality of life are improved by improved access to ecosystem services, including clean water, climate regulation, and biodiversity conservation. Thus, reforestation supports holistic development by coordinating social, economic, and environmental goals.";
                    break;
                case 4:
                    description = "Because reforestation restores habitats for various plant and animal species, it is essential to biodiversity conservation efforts. By encouraging genetic diversity and ecological resilience, it aids in the restoration of ecosystems that sustain a variety of plants and animals. Many species, particularly those threatened, depend on forests to provide them with food, shelter, and breeding grounds as they rebuild. Native species are frequently given priority in reforestation initiatives, which increases the diversity and complexity of ecological communities. Reforestation corridors help prevent biodiversity loss by facilitating species mobility and tying together fragmented habitats to increase forest cover. In the end, reforestation plays a critical role in maintaining and repairing Earth's complex web of life, protecting biodiversity for coming generations.";
                    break;
                default:
                    description = "Description not available";
            }

            // Set the popup content for Row 5
            popupImage5.style.backgroundImage = `url(${imageSrc})`;
            popupTitle5.innerText = title;
            popupDescription5.innerText = description;

            // Display the popup for Row 5
            popupOverlay5.style.display = "block";
        });
    });

    // Event listener to close Row 5 popup
    closePopup5.addEventListener("click", function() {
        popupOverlay5.style.display = "none";
    });
});

