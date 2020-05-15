(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{423:function(e,a){e.exports={frontMatter:{slug:"machine-learning",fileName:"machine-learning",readingTime:"☕️ 3 minutos de lectura",wordCount:436,identifier:"blog-#",date:"28-12-2020",dateModified:"28-12-2020",formattedDate:"Abril 2020",imageCaption:"webpack",imageUrl:"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png",heroImageUrl:"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png",title:"Machine Learning",description:"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!",tags:["webpack"],keywords:["webpack"]},bodyHtml:'<p>Labels Lo que vamos a predecir, por ejemplo: el tipo de animal mostrado en una imagen, el significado de un audio.<p>Features Caracteristicas de lo que vamos a predecir, mientras mas features mas sotisficado sera nuestro projecto<p>Examples<p>Es una instancia partical de data, estos pertenecen a dos categorias, labeled y unlabeled, labeled incluye feature(s) y su respectivo label, unlabeled solo feature(s).<p>Usamos labeled examples para train nuestro model, y una vez entranado nuestor modelo lo usamos para predecir examples unlabeled<p>Models<p>Define la relacion entre feature(s) y label, el modelo tiene 2 fases<ul><li>Training: significa crear o aprender<li>Inference: significa aplicar el trained model a unlabeled examples</ul><h3 id=regresion>Regresion</h3><p>predice valores continuos, por ejemplo el valor de una casa, probabilidad de hacer click en un anuncio<h3 id=clasification>Clasification</h3><p>predice valores discretos, por ejemplo: si la imagen es un perro o gato, si el email es spam o no.<h2 id=glosario>Glosario</h2><p>X: vector (features) Y: predicciones (label)<h4 id=logistic-regression>logistic regression</h4><p>para binary clasification<hr><p>parametric models linear regression, logistic regression, and SVMs,<p>Non-parametric models: k-nearest neighbors, decision trees, and random forests. Introducing cross-validation, hyperparameter tuning, and ensemble models. k-nearest neighbors (k-NN) <a href=https://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/ rel=nofollow target=_blank>https://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/</a><p>the model structure is purely determined from the data.<p>Dataset <a href=https://www.kaggle.com/c/titanic rel=nofollow target=_blank>https://www.kaggle.com/c/titanic</a><p>hyperparameters<p>Deep learning: TensorFlow, Caffe, Torch, Theano<p>Convolutional neural networks (CNNs). images, vision tasks<p>Recurrent neural networks (RNNs) language problems<p>Deep reinforcement learning.<p><a href=https://codelabs.developers.google.com/codelabs/cloud-tensorflow-mnist/#0 rel=nofollow target=_blank>https://codelabs.developers.google.com/codelabs/cloud-tensorflow-mnist/#0</a><p>TensorFlow > Keras Pytorch > FastAI<p><a href=https://www.datacamp.com/community/data-science-cheatsheets rel=nofollow target=_blank>https://www.datacamp.com/community/data-science-cheatsheets</a><p>inference cuando quieres usar el modelo<p><a href=https://www.starlette.io/ rel=nofollow target=_blank>https://www.starlette.io/</a><p>pythonanywhere<p>46:<hr><p>overfitting modelo aprende a identificar tus examples pero no en general<p>train_loss menor que valid_loss<p>3e-3<p><a href=http://matrixmultiplication.xyz/ rel=nofollow target=_blank>http://matrixmultiplication.xyz/</a><p><a href=https://machinelearningmastery.com/computational-linear-algebra-coders-review/ rel=nofollow target=_blank>https://machinelearningmastery.com/computational-linear-algebra-coders-review/</a> <a href=https://github.com/fastai/numerical-linear-algebra rel=nofollow target=_blank>https://github.com/fastai/numerical-linear-algebra</a><div class="math math-display"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mover accent=true><mi>y</mi><mo>⃗</mo></mover><mo>=</mo><mi>X</mi><mover accent=true><mi>a</mi><mo>⃗</mo></mover></mrow><annotation encoding=application/x-tex>\\vec{y}=X\\vec{a}</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.9084399999999999em;vertical-align:-.19444em></span><span class="mord accent"><span class="vlist-t vlist-t2"><span class=vlist-r><span class=vlist style=height:.714em><span style=top:-3em><span class=pstrut style=height:3em></span><span class=mord><span class="mord mathdefault"style=margin-right:.03588em>y</span></span></span><span style=top:-3em><span class=pstrut style=height:3em></span><span class=accent-body style=left:-.17994em><span class=overlay style=height:.714em;width:.471em><svg height=0.714em preserveAspectRatio=xMinYMin style=width:.471em viewBox="0 0 471 714"width=0.471em><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"/></svg></span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.19444em><span></span></span></span></span></span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>=</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.714em;vertical-align:0></span><span class="mord mathdefault"style=margin-right:.07847em>X</span><span class="mord accent"><span class=vlist-t><span class=vlist-r><span class=vlist style=height:.714em><span style=top:-3em><span class=pstrut style=height:3em></span><span class=mord><span class="mord mathdefault">a</span></span></span><span style=top:-3em><span class=pstrut style=height:3em></span><span class=accent-body style=left:-.2355em><span class=overlay style=height:.714em;width:.471em><svg height=0.714em preserveAspectRatio=xMinYMin style=width:.471em viewBox="0 0 471 714"width=0.471em><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"/></svg></span></span></span></span></span></span></span></span></span></span></span></div><p>SGD Stochastic gradient descent<p><a href=https://fr.wikipedia.org/wiki/Aide:Formules_TeX rel=nofollow target=_blank>https://fr.wikipedia.org/wiki/Aide:Formules_TeX</a><p><a href="https://www.youtube.com/watch?v=q6DGVGJ1WP4"rel=nofollow target=_blank>https://www.youtube.com/watch?v=q6DGVGJ1WP4</a><p>regulation que tan bien trabaja en data que no ah sido usada para las entrenar<h3 id=segmentation-model>Segmentation model</h3><p>✅Gtraining loss lower than validation loss<hr><h3 id=regresion-model>Regresion model</h3><p>we have a function where we take our input pixels (or whatever)<p>we multiply them by some weight matrix we replace the negatives with zeros<p>we multiply it by another weight matrix replace the negatives with zeros<p>we do that a few times<p>we see how close it is to our target<p>and then we use gradient descent to update our weight matrices using the derivatives and we do that a few times and eventually we end up with something that can classify movie reviews, recognize cats, etc.<p>pytorch<h3 id=clasification-with-localiation>Clasification with localiation</h3><h3 id=detection-multiple-objects>Detection (multiple objects)</h3>'}}}]);
//# sourceMappingURL=chunk.data.machine-learning.ef2c0f50.js.map