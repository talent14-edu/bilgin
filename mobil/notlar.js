function lessonNoteKey(grade,subject){
  return 'bilgin.mobil.not.'+grade+'|'+subject;
}
function readLessonNote(grade,subject){
  try{return localStorage.getItem(lessonNoteKey(grade,subject))||''}
  catch{return ''}
}
