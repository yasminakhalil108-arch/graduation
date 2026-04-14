// ADHD Scale JavaScript

document.getElementById('adhdForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Calculate total score
    let totalScore = 0;
    for (let i = 1; i <= 15; i++) {
        const selectedValue = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedValue) {
            totalScore += parseInt(selectedValue.value);
        }
    }
    
    // Calculate subscores
    let attentionScore = 0; // Q1-Q5
    let hyperactivityScore = 0; // Q6-Q10
    let impulsivityScore = 0; // Q11-Q15
    
    for (let i = 1; i <= 5; i++) {
        const selectedValue = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedValue) {
            attentionScore += parseInt(selectedValue.value);
        }
    }
    
    for (let i = 6; i <= 10; i++) {
        const selectedValue = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedValue) {
            hyperactivityScore += parseInt(selectedValue.value);
        }
    }
    
    for (let i = 11; i <= 15; i++) {
        const selectedValue = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedValue) {
            impulsivityScore += parseInt(selectedValue.value);
        }
    }
    
    // Display result
    displayResult(totalScore, attentionScore, hyperactivityScore, impulsivityScore);
});

function displayResult(totalScore, attentionScore, hyperactivityScore, impulsivityScore) {
    const resultContainer = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    
    let category = '';
    let categoryClass = '';
    let recommendation = '';
    let categoryText = '';
    
    if (totalScore <= 15) {
        category = '✅ طبيعي';
        categoryClass = 'score-normal';
        categoryText = 'مستوى طبيعي من الانتباه والتركيز';
        recommendation = 'استمر في نمط حياتك الصحي والحفاظ على التوازن بين العمل والراحة.';
    } else if (totalScore <= 25) {
        category = '⚠️ أعراض بسيطة';
        categoryClass = 'score-simple';
        categoryText = 'قد تكون لديك بعض الأعراض البسيطة';
        recommendation = 'يفضل الاهتمام بـتحسين التركيز والتنظيم. حاول تقسيم المهام إلى أجزاء صغيرة وخذ فترات راحة منتظمة.';
    } else if (totalScore <= 35) {
        category = '❗ أعراض متوسطة';
        categoryClass = 'score-medium';
        categoryText = 'قد تكون لديك أعراض متوسطة محتملة';
        recommendation = 'يُفضل استشارة متخصص نفسي أو طبيب لتقييم دقيق. قد تستفيد من برامج تدريب سلوكية أو رصد طبي.';
    } else {
        category = '🚨 مستوى مرتفع';
        categoryClass = 'score-high';
        categoryText = 'قد تكون لديك أعراض مرتفعة';
        recommendation = 'يُفضل زيارة متخصص فوراً لتقييم دقيق والحصول على التشخيص الصحيح والعلاج المناسب.';
    }
    
    const html = `
        <div class="score-display">${totalScore}/45</div>
        <div class="result-category ${categoryClass}">${category}</div>
        <p class="result-message">${categoryText}</p>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4>تفصيل النتائج:</h4>
            <p><strong>🧠 تشتت الانتباه:</strong> ${attentionScore}/15</p>
            <p><strong>⚡ فرط الحركة:</strong> ${hyperactivityScore}/15</p>
            <p><strong>🔥 الاندفاعية:</strong> ${impulsivityScore}/15</p>
        </div>
        
        <div class="result-recommendation">
            <strong>💡 التوصيات:</strong>
            <p>${recommendation}</p>
        </div>
    `;
    
    resultContent.innerHTML = html;
    resultContainer.classList.remove('hidden');
    
    // Scroll to result
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}
