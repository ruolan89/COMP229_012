document.getElementById('downloadFileBtn').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const text = 'My name is Ruolan Wang, I am studying Artificial Intelligence - Software Engineering Technology in Centennial College. Now, it is my third semester.';
    const newText = doc.splitTextToSize(text, 180);
    
    doc.text(newText, 10, 10);
    
    doc.save('PersonalInformation.pdf');
});