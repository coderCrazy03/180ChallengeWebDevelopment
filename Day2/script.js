let jokes = [
    "टीचर: बिजली कहाँ से आती है?\nपप्पू: सर, बिजली बहुत गुस्से वाली होती है, जहाँ से भी आती है, पट से चली जाती है!",
    "Why don't scientists trust atoms?\nBecause they make up everything!",
    "पत्नी: सुनिए जी, एक खुशखबरी है\nपति: क्या है?\nपत्नी: आप पापा बनने वाले हैं\nपति: वाह! लेकिन मुझे कैसे पता चला?\nपत्नी: मेरे सपने में भगवान आये थे और बोले थे!",
    "Why was the math book sad?\nBecause it had too many problems!",
    "सोनू: यार तू स्कूल क्यों नहीं जाता?\nमोनू: अरे यार, स्कूल का नाम सुनते ही मेरा BP बढ़ जाता है!",
    "Why do cows have hooves instead of feet?\nBecause they lactose!",
    "टीचर: अगर कोई लड़का किसी लड़की को गुलाब का फूल दे तो इसका क्या मतलब है?\nपप्पू: इसका मतलब यह होता है कि गुलाब के फूल की दुकान वाले का धंधा अच्छा चल रहा है!",
    "Why don't some couples go to the gym?\nBecause some relationships don't work out!",
    "पत्नी: आप हमेशा मेरे जन्मदिन पर एक ही गिफ्ट क्यों देते हो?\nपति: क्यूंकि महंगे गिफ्ट्स के लिए एक जन्मदिन काफी नहीं होता!",
    "Why don't skeletons fight each other?\nThey don't have the guts!",
    "टीचर: समझदार और मूर्ख में क्या अंतर है?\nबच्चा: समझदार पानी फिल्टर करके पीते हैं, मूर्ख मिनरल वाटर!",
    "Why did the scarecrow win an award?\nBecause he was outstanding in his field!",
    "पप्पू: डॉक्टर साहब, मुझे दिन में तीन बार नींद आ जाती है, क्या करूँ?\nडॉक्टर: आप रात में सोया करो!",
    "Why did the bicycle fall over?\nBecause it was two-tired!",
    "टीचर: मोहन, ये बताओ नींबू खट्टा क्यों होता है?\nमोहन: क्योंकि उसकी शादी नहीं हुई होती!",
    "Why don't oysters share their pearls?\nBecause they're shellfish!",
    "पत्नी: सुनो जी, कल रात घर देर से क्यों आये?\nपति: वो दोस्त की शादी थी\nपत्नी: पर आपके दोस्त तो सारे कुंवारे हैं\nपति: हाँ, उसी की तो शादी थी!",
    "Why did the golfer bring two pairs of pants?\nIn case he got a hole in one!",
    "पप्पू: सर, मुझे 2 दिन की छुट्टी चाहिए\nटीचर: क्यों?\nपप्पू: क्योंकि मेरी माँ ने कहा कि अगर पढ़ाई में मन न लगे तो दो दिन की छुट्टी ले लो!",
    "Why did the math book look so sad?\nBecause it had too many problems!",
    "टीचर: रामू, ये बताओ कि अगर तुम्हें कोई गाली दे तो क्या करोगे?\nरामू: टीचर, पहले आप बताइए कि किस गाली का क्या मतलब होता है, तब बताऊंगा!",
    "Why don't crabs give to charity?\nBecause they're shellfish!",
    "पप्पू: यार, तेरी टीचर बहुत सुंदर है\nमोनू: हाँ, तो?\nपप्पू: तो तू स्कूल क्यों नहीं जाता?\nमोनू: यार, वो सुंदर है, लेकिन पढ़ाती भी बहुत है!",
    "Why did the coffee file a police report?\nIt got mugged!",
    "टीचर: बताओ 1857 में क्या हुआ था?\nछात्र: सर, जन्म हुआ था, 1857 में!",
    "Why did the tomato turn red?\nBecause it saw the salad dressing!",
    "टीचर: अगर मैं तेरे एक कान से घड़ी उतारूँ तो क्या होगा?\nपप्पू: सर, मैं टाइमपास करने लगूँगा!",
    "Why don't some people eat clocks?\nBecause it's too time-consuming!",
    "पति: तुम्हारी मुस्कान देख कर मेरा दिल बाग-बाग हो जाता है\nपत्नी: तो फिर तुम घर क्यों नहीं आते?\nपति: अरे, वो मैं ऑफिस की मुस्कान की बात कर रहा था!",
    "Why do seagulls fly over the sea?\nBecause if they flew over the bay, they'd be bagels!",
    "टीचर: देशभक्ति पर एक निबंध लिखो\nपप्पू: देश में 5G आ चुका है, लेकिन नेटवर्क अभी भी 2G है!",
    "Why did the scarecrow become a successful neurosurgeon?\nBecause he was outstanding in his field!",
    "पत्नी: सुनो जी, ये खीर कैसी बनी है?\nपति: एक दम दही जैसी!\nपत्नी: वाह, आपने मेरी खीर की तारीफ की!\nपति: नहीं, मैं तो दही की बात कर रहा था!",
    "Why did the skeleton go to the party alone?\nBecause he had no body to go with!",
    "टीचर: अगर किसी जानवर की पूछ काट दी जाए तो क्या होगा?\nछात्र: सर, कुत्ता डॉग से सिर्फ डॉ हो जाएगा!",
    "Why did the student eat his homework?\nBecause his teacher told him it was a piece of cake!",
    "टीचर: अगर पृथ्वी घूमना बंद कर दे तो क्या होगा?\nपप्पू: सर, हम सब गिर जाएंगे, और देश का नाम धरती पर हो जाएगा!",
    "Why did the grape stop in the middle of the road?\nBecause it ran out of juice!",
    "पत्नी: सुनिए जी, आप इतने देर से कहाँ थे?\nपति: अरे, वो कार का टायर पंचर हो गया था\nपत्नी: तो 4 घंटे कैसे लगे?\nपति: वो मैंने गाना गाते हुए पंचर लगाया!",
    "Why don't eggs tell jokes?\nBecause they might crack up!",
    "टीचर: समझदार और मूर्ख में क्या अंतर है?\nछात्र: समझदार लोग मुझसे दूर रहते हैं, और मूर्ख दोस्त बनाते हैं!",
    "Why did the cookie go to the hospital?\nBecause it felt crummy!",
    "पत्नी: ये आप रोज रात को बाहर क्यों जाते हो?\nपति: वो दोस्त बुलाते हैं\nपत्नी: अच्छा, मैं भी चलूँ?\nपति: नहीं, दोस्त सिर्फ मुझे ही बुलाते हैं!",
    "Why do bees hum?\nBecause they don't know the words!",
    "टीचर: अगर किसी जानवर की पूँछ काट दी जाए तो क्या होगा?\nछात्र: सर, वो जानवर कूल नहीं रहेगा!",
    "Why did the orange stop rolling down the hill?\nBecause it ran out of juice!",
    "पत्नी: सुनो जी, अगर मैं मर गई तो क्या करोगे?\nपति: अरे पगली, मैं भी तेरे साथ मर जाऊँगा!\nपत्नी: पक्का?\nपति: हाँ, और क्या, फिर दूसरा शादी करने का मौका मिलेगा!",
    "Why do elephants never use computers?\nBecause they're afraid of the mouse!",
    "टीचर: अगर दुनिया गोल है तो हम गिरते क्यों नहीं?\nपप्पू: क्योंकि हमें गिराने वाला ऊपर वाला होता है!",
    "Why did the scarecrow stand in the middle of the road?\nBecause it wanted to be outstanding in its field!",
    "पति: तुम्हारी आँखें बहुत सुंदर हैं\nपत्नी: धन्यवाद!\nपति: क्या तुम इन्हें वापस करना चाहोगी?\nपत्नी: क्यों?\nपति: क्योंकि मेरी माँ ने कहा था कि अगर कोई चीज पसंद न आए तो वापस कर देना!",
    "Why do cows wear bells?\nBecause their horns don't work!",
    "टीचर: अगर मैं तुम्हें 100 रुपये दूँ और तुमने 20 रुपये गुम कर दिए तो कितने रुपये बचे?\nछात्र: सर, मेरे पास 100 रुपये ही रहेंगे!\nटीचर: कैसे?\nछात्र: क्योंकि मैं कभी पैसे नहीं गुमाता!",
    "Why don't you ever see elephants hiding in trees?\nBecause they're so good at it!",
    "पति: तुमसे शादी करके मैं बहुत खुश हूँ\nपत्नी: धन्यवाद!\nपति: और तुम?\nपत्नी: मुझे भी तुमसे शादी करके महसूस होता है कि मैंने जीवन में कुछ तो गलत किया है!",
    "Why did the tomato turn red?\nBecause it saw the salad dressing!",
    "टीचर: अगर पृथ्वी घूमना बंद कर दे तो क्या होगा?\nछात्र: सर, हमें उल्टियाँ आ जाएंगी!",
    "Why do bicycles fall over?\nBecause they're two-tired!",
    "पति: तुम मेरी जीवन का सबसे बड़ा सौभाग्य हो\nपत्नी: धन्यवाद!\nपति: और सबसे बड़ा दुर्भाग्य भी!\nपत्नी: क्यों?\nपति: क्योंकि तुमसे छुटकारा पाने का कोई उपाय नहीं!",
    "Why do fish never do well in school?\nBecause they're always swimming around!",
    "टीचर: अगर मैं तेरे एक कान से घड़ी उतारूँ तो क्या होगा?\nछात्र: सर, मैं टाइमपास करने लगूँगा!",
    "Why did the scarecrow stand in the middle of the road?\nBecause it wanted to be outstanding in its field!",
    "पति: तुम मेरी ज़िंदगी की सबसे बड़ी सौगात हो\nपत्नी: धन्यवाद!\nपति: और सबसे बड़ा सरदर्द भी!\nपत्नी: क्यों?\nपति: क्योंकि तुम्हारे बिना नींद भी नहीं आती!",
    "Why don't scientists trust atoms?"];
function show() {
    var randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('show').innerText = jokes[randomIndex];
}
function myPlay() {
    var audio = document.getElementById('sounds');
    audio.currentTime = 0;
    audio.play();
}
var button = document.querySelector('.btn');
var isPlaying = false;

button.addEventListener('click', function() {
    if (!isPlaying) {
        show();
        myPlay(); 
        isPlaying = true;

        var audio = document.getElementById('sounds');
        audio.addEventListener('ended', function() {
            isPlaying = false;
        });
    }
});