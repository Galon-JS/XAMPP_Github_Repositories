"use strict";

console.log( "Heloo !!!" );

async function addFetchFile ( screen ) {
    screen = document.querySelector( ".screen" );
    try {
        await fetch( "./quiz.json" )
            .then( ( response ) => {
                return response.json();
            } )
            .then( ( data ) => {
                screen.innerHTML = `<div>
                                <h4>Question 1: ${ data.quiz.q1.question }</h4> <br>
                                <div>
                                    <input type="radio" id="q1-opt1" class="mx-2" value="a" name="q1"><label for="q1-opt1">${ data.quiz.q1.options[ 0 ] }</label><br>
                                    <input type="radio" id="q1-opt2" class="mx-2" value="b" name="q1"><label for="q1-opt2">${ data.quiz.q1.options[ 1 ] }</label><br>
                                    <input type="radio" id="q1-opt3" class="mx-2" value="c" name="q1"><label for="q1-opt3">${ data.quiz.q1.options[ 2 ] }</label><br>
                                    <input type="radio" id="q1-opt4" class="mx-2" value="d" name="q1"><label for="q1-opt4">${ data.quiz.q1.options[ 3 ] }</label>
                                </div>
                            </div><br>
                            <div>
                                <h4>Question 2: ${ data.quiz.q2.question }</h4> <br>
                                <div>
                                    <input type="radio" id="q2-opt1" class="mx-2" value="a" name="q2"><label for="q2-opt1">${ data.quiz.q2.options[ 0 ] }</label><br>
                                    <input type="radio" id="q2-opt2" class="mx-2" value="b" name="q2"><label for="q2-opt2">${ data.quiz.q2.options[ 1 ] }</label><br>
                                    <input type="radio" id="q2-opt3" class="mx-2" value="c" name="q2"><label for="q2-opt3">${ data.quiz.q2.options[ 2 ] }</label><br>
                                    <input type="radio" id="q2-opt4" class="mx-2" value="d" name="q2"><label for="q2-opt4">${ data.quiz.q2.options[ 3 ] }</label>
                                </div>
                            </div><br>
                            <div>
                                <h4>Question 3: ${ data.quiz.q3.question }</h4> <br>
                                <div>
                                    <input type="radio" id="q3-opt1" class="mx-2" value="a" name ="q3"><label for="q3-opt1">${ data.quiz.q3.options[ 0 ] }</label><br>
                                    <input type="radio" id="q3-opt2" class="mx-2" value="b" name ="q3"><label for="q3-opt2">${ data.quiz.q3.options[ 1 ] }</label><br>
                                    <input type="radio" id="q3-opt3" class="mx-2" value="c" name ="q3"><label for="q3-opt3">${ data.quiz.q3.options[ 2 ] }</label><br>
                                    <input type="radio" id="q3-opt4" class="mx-2" value="d" name ="q3"><label for="q3-opt4">${ data.quiz.q3.options[ 3 ] }</label>
                                </div>
                            </div><br>
                            <div>
                                <h4>Question 4: ${ data.quiz.q4.question }</h4>
                                <div>
                                    <input type="radio" id="q4-opt1" class="mx-2" value="a" name="q4"><label for="q4-opt1">${ data.quiz.q4.options[ 0 ] }</label><br>
                                    <input type="radio" id="q4-opt2" class="mx-2" value="b" name="q4"><label for="q4-opt2">${ data.quiz.q4.options[ 1 ] }</label><br>
                                    <input type="radio" id="q4-opt3" class="mx-2" value="c" name="q4"><label for="q4-opt3">${ data.quiz.q4.options[ 2 ] }</label><br>
                                    <input type="radio" id="q4-opt4" class="mx-2" value="d" name="q4"><label for="q4-opt4">${ data.quiz.q4.options[ 3 ] }</label>
                                </div>
                            </div><br>`;
                let q1 = document.getElementsByName( "q1" );
                q1[ 0 ].onclick = function() {
                    localStorage.setItem( "q1",q1[ 0 ].value );
                };
                q1[ 1 ].onclick = function() {
                    localStorage.setItem( "q1",q1[ 1 ].value );
                };
                q1[ 2 ].onclick = function() {
                    localStorage.setItem( "q1",q1[ 2 ].value );
                };
                q1[ 3 ].onclick = function() {
                    localStorage.setItem( "q1",q1[ 3 ].value );
                };

                let q2 = document.getElementsByName( "q2" );
                q2[ 0 ].onclick = function() {
                    localStorage.setItem( "q2",q2[ 0 ].value );
                };
                q2[ 1 ].onclick = function() {
                    localStorage.setItem( "q2",q2[ 1 ].value );
                };
                q2[ 2 ].onclick = function() {
                    localStorage.setItem( "q2",q2[ 2 ].value );
                };
                q2[ 3 ].onclick = function() {
                    localStorage.setItem( "q2",q2[ 3 ].value );
                };

                let q3 = document.getElementsByName( "q3" );
                q3[ 0 ].onclick = function() {
                    localStorage.setItem( "q3",q3[ 0 ].value );
                };
                q3[ 1 ].onclick = function() {
                    localStorage.setItem( "q3",q3[ 1 ].value );
                };
                q3[ 2 ].onclick = function() {
                    localStorage.setItem( "q3",q3[ 2 ].value );
                };
                q3[ 3 ].onclick = function() {
                    localStorage.setItem( "q3",q3[ 3 ].value );
                };

                let q4 = document.getElementsByName( "q4" );
                q4[ 0 ].onclick = function() {
                    localStorage.setItem( "q4",q4[ 0 ].value );
                };
                q4[ 1 ].onclick = function() {
                    localStorage.setItem( "q4",q4[ 1 ].value );
                };
                q4[ 2 ].onclick = function() {
                    localStorage.setItem( "q4",q4[ 2 ].value );
                };
                q4[ 3 ].onclick = function() {
                    localStorage.setItem( "q4",q4[ 3 ].value );
                };
                window.onload = function( lastKeyQ1,lastKeyQ2,lastKeyQ3,lastKeyQ4 ) {
                    lastKeyQ1 = localStorage.q1;
                    console.log( "lastKeyQ1: ",lastKeyQ1 );
                    if( lastKeyQ1 === "a" ) {
                        q1[ 0 ].checked = true;
                    } else if( lastKeyQ1 === "b" ) {
                        q1[ 1 ].checked = true;
                    } else if( lastKeyQ1 === "c" ) {
                        q1[ 2 ].checked = true;
                    } else if( lastKeyQ1 === "d" ) {
                        q1[ 3 ].checked = true;
                    }

                    lastKeyQ2 = localStorage.q2;
                    console.log( "lastKeyQ2: ",lastKeyQ2 );
                    if( lastKeyQ2 === "a" ) {
                        q2[ 0 ].checked = true;
                    } else if( lastKeyQ2 === "b" ) {
                        q2[ 1 ].checked = true;
                    } else if( lastKeyQ2 === "c" ) {
                        q2[ 2 ].checked = true;
                    } else if( lastKeyQ2 === "d" ) {
                        q2[ 3 ].checked = true;
                    }

                    lastKeyQ3 = localStorage.q3;
                    console.log( "lastKeyQ3: ",lastKeyQ3 );
                    if( lastKeyQ3 === "a" ) {
                        q3[ 0 ].checked = true;
                    } else if( lastKeyQ3 === "b" ) {
                        q3[ 1 ].checked = true;
                    } else if( lastKeyQ3 === "c" ) {
                        q3[ 2 ].checked = true;
                    } else if( lastKeyQ3 === "d" ) {
                        q3[ 3 ].checked = true;
                    }

                    lastKeyQ4 = localStorage.q4;
                    console.log( "lastKeyQ4: ",lastKeyQ4 );
                    if( lastKeyQ4 === "a" ) {
                        q4[ 0 ].checked = true;
                    } else if( lastKeyQ4 === "b" ) {
                        q4[ 1 ].checked = true;
                    } else if( lastKeyQ4 === "c" ) {
                        q4[ 2 ].checked = true;
                    } else if( lastKeyQ4 === "d" ) {
                        q4[ 3 ].checked = true;
                    }
                };
            } );
    } catch( error ) {
        screen.innerHTML = error.message;
    }
}
addFetchFile();
