"use strict";var daysLeft=document.querySelector(".card__days"),moneyGathered=document.querySelector(".card__money"),barFill=document.querySelector(".card__progressbar--fill"),backersTotal=document.querySelector(".card__backers"),continueButtons=document.querySelectorAll("input[data-tier]"),itemsLeft=document.querySelectorAll(".counter"),pledgeModal=document.querySelector(".modal__back"),modalConfirm=document.querySelector(".modal__confirm"),modalConfirmBtn=modalConfirm.querySelector(".modal__confirm__btn"),modalShadow=document.querySelector(".modal__shadow"),rewards=[{name:"Bamboo",tier:1,value:25,left:101},{name:"Black",tier:2,value:75,left:64},{name:"Mahogany",tier:3,value:200,left:0}],countDays=function(e){var e=e.getTime(),t=(new Date).getTime(),e=Math.floor((e-t)/864e5);daysLeft.textContent=e},computeBackedMoney=(countDays(new Date("Jun 23, 2022 15:00:00")),function(e){var t=parseInt(localStorage.getItem("amount"))||parseInt(moneyGathered.textContent.slice(1,moneyGathered.textContent.length).replace(",","")),t=Math.floor(t/1e3*100/e);barFill.style.width="".concat(t,"%")}),addMoneyAndBacker=(computeBackedMoney(100),function(e){var t=parseInt(localStorage.getItem("amount"))||parseInt(moneyGathered.textContent.slice(1,moneyGathered.textContent.length).replace(",","")),a=(console.log(t),parseInt(localStorage.getItem("backers"))||parseInt(backersTotal.textContent.replace(",","")));console.log(a),a++,moneyGathered.textContent="$".concat((t+=e).toLocaleString()),backersTotal.textContent="".concat(a.toLocaleString()),localStorage.setItem("amount",t),localStorage.setItem("backers",a),computeBackedMoney(100)}),confirmPledge=function(){(pledgeModal.classList.contains("modal__back--active")||modalShadow.classList.contains("modal__shadow--active"))&&(pledgeModal.classList.remove("modal__back--active"),modalConfirm.classList.add("modal__confirm--active"))},closeConfirm=function(){modalConfirm.classList.remove("modal__confirm--active"),modalShadow.classList.remove("modal__shadow--active")},handleOrder=function(e){e.preventDefault(),rewards[e.target.dataset.tier].left<=0?console.log("%cOUT OF STOCK DUDE!!","color:red; font-size:36px"):(parseInt(e.target.previousElementSibling.value)!=rewards[e.target.dataset.tier].value?addMoneyAndBacker(e.target.previousElementSibling.value):addMoneyAndBacker(rewards[e.target.dataset.tier].value),rewards[e.target.dataset.tier].left--,itemsLeft[e.target.dataset.tier].textContent=rewards[e.target.dataset.tier].left,itemsLeft[parseInt(e.target.dataset.tier)+3].textContent=rewards[e.target.dataset.tier].left,confirmPledge())};continueButtons.forEach(function(e){return e.addEventListener("click",handleOrder)}),modalConfirmBtn.addEventListener("click",closeConfirm);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXB1dGUuanMiXSwibmFtZXMiOlsiZGF5c0xlZnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb25leUdhdGhlcmVkIiwiYmFyRmlsbCIsImJhY2tlcnNUb3RhbCIsImNvbnRpbnVlQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtc0xlZnQiLCJwbGVkZ2VNb2RhbCIsIm1vZGFsQ29uZmlybSIsIm1vZGFsQ29uZmlybUJ0biIsIm1vZGFsU2hhZG93IiwicmV3YXJkcyIsIm5hbWUiLCJ0aWVyIiwidmFsdWUiLCJsZWZ0IiwicmVtYWluaW5nRGF5cyIsInNlbGVjdGVkRGF0ZSIsImVuZERhdGUiLCJ0ZXh0Q29udGVudCIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiTWF0aCIsImZsb29yIiwiY291bnREYXlzIiwiY29tcHV0ZUJhY2tlZE1vbmV5IiwiZ29hbCIsImdhdGhlcmVkIiwicGFyc2VJbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2xpY2UiLCJsZW5ndGgiLCJyZXBsYWNlIiwicGVyY2VudGFnZSIsIndpZHRoIiwiYmFja2VycyIsImFkZE1vbmV5QW5kQmFja2VyIiwiY29uc29sZSIsImxvZyIsIm1vbmV5QW1vdW50Iiwic2V0SXRlbSIsInRvTG9jYWxlU3RyaW5nIiwiY29uZmlybVBsZWRnZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiY2xvc2VDb25maXJtIiwiaGFuZGxlT3JkZXIiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBTUEsU0FBV0MsU0FBU0MsY0FBYyxlQUFsQ0YsY0FBV0MsU0FBU0MsY0FBYyxnQkFDbENDLFFBQUFBLFNBQWVGLGNBQVNDLDRCQUN4QkUsYUFBVUgsU0FBU0MsY0FBYyxrQkFDakNHLGdCQUFlSixTQUFTQyxpQkFBYyxvQkFDdENJ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c0NvbnRlbnQiOlsiXHJcbmNvbnN0IGRheXNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2RheXMnKTtcclxuY29uc3QgbW9uZXlHYXRoZXJlZD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX21vbmV5Jyk7XHJcbmNvbnN0IGJhckZpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fcHJvZ3Jlc3NiYXItLWZpbGwnKTtcclxuY29uc3QgYmFja2Vyc1RvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2JhY2tlcnMnKTtcclxuY29uc3QgY29udGludWVCdXR0b25zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLXRpZXJdJyk7XHJcbmNvbnN0IGl0ZW1zTGVmdD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50ZXInKTtcclxuY29uc3QgcGxlZGdlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2JhY2snKTtcclxuY29uc3QgbW9kYWxDb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb25maXJtJyk7XHJcbmNvbnN0IG1vZGFsQ29uZmlybUJ0biA9IG1vZGFsQ29uZmlybS5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbmZpcm1fX2J0bicpO1xyXG5jb25zdCBtb2RhbFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fc2hhZG93Jyk7XHJcbmNvbnN0IHJld2FyZHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JhbWJvbycsXHJcbiAgICAgICAgdGllcjogMSxcclxuICAgICAgICB2YWx1ZTogMjUsXHJcbiAgICAgICAgbGVmdDogMTAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdCbGFjaycsXHJcbiAgICAgICAgdGllcjogMixcclxuICAgICAgICB2YWx1ZTogNzUsXHJcbiAgICAgICAgbGVmdDogNjRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ01haG9nYW55JyxcclxuICAgICAgICB0aWVyOiAzLFxyXG4gICAgICAgIHZhbHVlOiAyMDAsXHJcbiAgICAgICAgbGVmdDogMFxyXG4gICAgfV07XHJcblxyXG4vL1JlbWFpbmluZyBkYXlzXHJcbmNvbnN0IGNvdW50RGF5cyA9IChzZWxlY3RlZERhdGUpID0+IHtcclxuICAgIGNvbnN0IGVuZERhdGUgPSBzZWxlY3RlZERhdGUuZ2V0VGltZSgpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCByZW1haW5pbmdEYXlzID0gTWF0aC5mbG9vcigoKGVuZERhdGUgLSBub3cpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSk7XHJcbiAgICBkYXlzTGVmdC50ZXh0Q29udGVudCA9IHJlbWFpbmluZ0RheXM7XHJcbn1cclxuY291bnREYXlzKG5ldyBEYXRlKCdKdW4gMjMsIDIwMjIgMTU6MDA6MDAnKSk7XHJcblxyXG4vL1NldCBiYXIgd2lkdGhcclxuY29uc3QgY29tcHV0ZUJhY2tlZE1vbmV5ID0gKGdvYWwpID0+IHtcclxuICAgIGxldCBnYXRoZXJlZCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbW91bnQnKSkgfHwgcGFyc2VJbnQobW9uZXlHYXRoZXJlZC50ZXh0Q29udGVudC5zbGljZSgxLCBtb25leUdhdGhlcmVkLnRleHRDb250ZW50Lmxlbmd0aCkucmVwbGFjZSgnLCcsICcnKSk7XHJcbiAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5mbG9vcigoZ2F0aGVyZWQgLzEwMDAgKiAxMDApIC8gZ29hbCk7XHJcbiAgICBiYXJGaWxsLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudGFnZX0lYDtcclxufVxyXG5jb21wdXRlQmFja2VkTW9uZXkoMTAwKTtcclxuXHJcbi8vQWRkIG1vbmV5IHRvIGdvYWxcclxuY29uc3QgYWRkTW9uZXlBbmRCYWNrZXIgPSAobW9uZXlBbW91bnQpID0+IHtcclxuICAgIGxldCBnYXRoZXJlZCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbW91bnQnKSkgfHwgcGFyc2VJbnQobW9uZXlHYXRoZXJlZC50ZXh0Q29udGVudC5zbGljZSgxLCBtb25leUdhdGhlcmVkLnRleHRDb250ZW50Lmxlbmd0aCkucmVwbGFjZSgnLCcsICcnKSk7XHJcbiAgICBjb25zb2xlLmxvZyhnYXRoZXJlZCk7XHJcbiAgICBsZXQgYmFja2VycyA9ICBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmFja2VycycpKSB8fCBwYXJzZUludChiYWNrZXJzVG90YWwudGV4dENvbnRlbnQucmVwbGFjZSgnLCcsICcnKSk7XHJcbiAgICBjb25zb2xlLmxvZyhiYWNrZXJzKTtcclxuICAgIGdhdGhlcmVkKz1tb25leUFtb3VudDtcclxuICAgIGJhY2tlcnMrKztcclxuICAgIG1vbmV5R2F0aGVyZWQudGV4dENvbnRlbnQ9YCQke2dhdGhlcmVkLnRvTG9jYWxlU3RyaW5nKCl9YDtcclxuICAgIGJhY2tlcnNUb3RhbC50ZXh0Q29udGVudCA9IGAke2JhY2tlcnMudG9Mb2NhbGVTdHJpbmcoKX1gO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Ftb3VudCcsIGdhdGhlcmVkKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiYWNrZXJzJywgYmFja2Vycyk7XHJcbiAgICBcclxuICAgIGNvbXB1dGVCYWNrZWRNb25leSgxMDApO1xyXG59XHJcbi8vcmVhd3Jkc1xyXG5jb25zdCBjb25maXJtUGxlZGdlID0gKCkgPT4ge1xyXG4gICAgaWYocGxlZGdlTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9fYmFjay0tYWN0aXZlJykgfHwgbW9kYWxTaGFkb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9fc2hhZG93LS1hY3RpdmUnKSlcclxuICAgIHtcclxuICAgICAgICBwbGVkZ2VNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fYmFjay0tYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxDb25maXJtLmNsYXNzTGlzdC5hZGQoJ21vZGFsX19jb25maXJtLS1hY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBjbG9zZUNvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBtb2RhbENvbmZpcm0uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2NvbmZpcm0tLWFjdGl2ZScpO1xyXG4gICAgbW9kYWxTaGFkb3cuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX3NoYWRvdy0tYWN0aXZlJyk7XHJcbn1cclxuY29uc3QgaGFuZGxlT3JkZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHJld2FyZHNbZS50YXJnZXQuZGF0YXNldC50aWVyXS5sZWZ0IDw9IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjT1VUIE9GIFNUT0NLIERVREUhIVwiLCBcImNvbG9yOnJlZDsgZm9udC1zaXplOjM2cHhcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgIHBhcnNlSW50KGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUpICE9IHJld2FyZHNbZS50YXJnZXQuZGF0YXNldC50aWVyXS52YWx1ZSA/IGFkZE1vbmV5QW5kQmFja2VyKGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUpIDogYWRkTW9uZXlBbmRCYWNrZXIocmV3YXJkc1tlLnRhcmdldC5kYXRhc2V0LnRpZXJdLnZhbHVlKTtcclxuICAgIHJld2FyZHNbZS50YXJnZXQuZGF0YXNldC50aWVyXS5sZWZ0LS07XHJcbiAgICBpdGVtc0xlZnRbZS50YXJnZXQuZGF0YXNldC50aWVyXS50ZXh0Q29udGVudCA9IHJld2FyZHNbZS50YXJnZXQuZGF0YXNldC50aWVyXS5sZWZ0O1xyXG4gICAgaXRlbXNMZWZ0W3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQudGllcikgKyAzXS50ZXh0Q29udGVudCA9IHJld2FyZHNbZS50YXJnZXQuZGF0YXNldC50aWVyXS5sZWZ0O1xyXG4gICAgY29uZmlybVBsZWRnZSgpO1xyXG4gICAgXHJcbn1cclxuY29udGludWVCdXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9yZGVyKSk7XHJcbm1vZGFsQ29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQ29uZmlybSkiXX0=
