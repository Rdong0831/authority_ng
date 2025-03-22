import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FeedBackIcon } from 'src/app/shared/enum/feedback-icon.emum';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: [ './feedback.component.scss' ]
})
export class FeedbackComponent implements OnInit {

  showFeedBackBtn: boolean = true;

  displayPosition: boolean = false;

  openTextArea: boolean = false;

  position: string = 'right';

  bad_focus: boolean;
  dislike_focus: boolean;
  neutral_focus: boolean;
  like_focus: boolean;
  love_focus: boolean;

  bad_hover: boolean;
  dislike_hover: boolean;
  neutral_hover: boolean;
  like_hover: boolean;
  love_hover: boolean;

  // 有任一圖示狀態為hover
  any_hover: boolean = false;

  feedbackForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder
  ) {
    this.feedbackForm = this.fb.group({
      content: [ null ]
    })
  }

  ngOnInit(): void {
  }

  showPositionDialog(status: boolean, position: string) {
    this.position = position;
    this.displayPosition = status;
    this.showFeedBackBtn = !status;
    this.notFocus();
  }

  closePositionDialog(status: boolean) {
    this.displayPosition = status;
    this.openTextArea = status;
    this.showFeedBackBtn = !status;
    this.notFocus();
    this.feedbackForm.reset();
  }

  // btn hover start
  hover(state: boolean, type: any) {
    switch (type) {
      case FeedBackIcon.Bad:
        this.bad_hover = state
        return
      case FeedBackIcon.Dislike:
        this.dislike_hover = state
        return
      case FeedBackIcon.Neutral:
        this.neutral_hover = state
        return
      case FeedBackIcon.Like:
        this.like_hover = state
        return
      case FeedBackIcon.Love:
        this.love_hover = state
        return
    }
  }

  notHover() {
    this.bad_hover = false
    this.dislike_hover = false
    this.neutral_hover = false
    this.like_hover = false
    this.love_hover = false
    this.any_hover = false
  }
  // btn hover end

  // btn focus start
  focus(state: boolean, type: any) {
    this.any_hover = state
    switch (type) {
      case FeedBackIcon.Bad:
        this.bad_focus = state
        this.dislike_focus = !state
        this.neutral_focus = !state
        this.like_focus = !state
        this.love_focus = !state
        return
      case FeedBackIcon.Dislike:
        this.bad_focus = !state
        this.dislike_focus = state
        this.neutral_focus = !state
        this.like_focus = !state
        this.love_focus = !state
        return
      case FeedBackIcon.Neutral:
        this.bad_focus = !state
        this.dislike_focus = !state
        this.neutral_focus = state
        this.like_focus = !state
        this.love_focus = !state
        return
      case FeedBackIcon.Like:
        this.bad_focus = !state
        this.dislike_focus = !state
        this.neutral_focus = !state
        this.like_focus = state
        this.love_focus = !state
        return
      case FeedBackIcon.Love:
        this.bad_focus = !state
        this.dislike_focus = !state
        this.neutral_focus = !state
        this.like_focus = !state
        this.love_focus = state
        return
    }
  }

  notFocus() {
    this.bad_focus = false
    this.dislike_focus = false
    this.neutral_focus = false
    this.like_focus = false
    this.love_focus = false
  }
  // btn focus end
}
