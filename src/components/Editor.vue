<template>
  <div :class="classNames">
    <editor-menu-bubble
      :editor="editor"
      :keep-in-bounds="keepInBounds"
      v-slot="{ commands, isActive, getMarkAttrs, menu }"
    >
      <div
        class="editor-menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >
        <button
          :class="{ 'is-active': isActive.heading() }"
        >
          <q-icon name="title" />
          <div class="editor-menububble-popup">
            <button
              :class="{ 'is-active': isActive.heading({ level: 1 }) }"
              @click="commands.heading({ level: 1 })"
            >
              H1
            </button>
            <button
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
            >
              H2
            </button>
            <button
              :class="{ 'is-active': isActive.heading({ level: 3 }) }"
              @click="commands.heading({ level: 3 })"
            >
              H3
            </button>
            <button
              :class="{ 'is-active': isActive.heading({ level: 4 }) }"
              @click="commands.heading({ level: 4 })"
            >
              H4
            </button>
            <button
              :class="{ 'is-active': isActive.heading({ level: 5 }) }"
              @click="commands.heading({ level: 5 })"
            >
              H5
            </button>
            <button
              :class="{ 'is-active': isActive.heading({ level: 6 }) }"
              @click="commands.heading({ level: 6 })"
            >
              H6
            </button>
          </div>
        </button>

        <button
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <q-icon name="format_bold" />
        </button>

        <button
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <q-icon name="format_italic" />
        </button>

        <button
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <q-icon name="format_underline" />
        </button>

        <button
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <q-icon name="format_strikethrough" />
        </button>

        <button
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <q-icon name="format_quote" />
        </button>

        <button
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <q-icon name="code" />
        </button>

        <button
          :class="{ 'is-active': !!getMarkAttrs('alignment').align }"
        >
          <q-icon name="format_align_left" />
          <div class="editor-menububble-popup">
            <button
              :class="{ 'is-active': getMarkAttrs('alignment').align === 'left' }"
              @click="commands.alignment({ align: 'left' })"
            >
              <q-icon name="format_align_left" />
            </button>
            <button
              :class="{ 'is-active': getMarkAttrs('alignment').align === 'center' }"
              @click="commands.alignment({ align: 'center' })"
            >
              <q-icon name="format_align_center" />
            </button>
            <button
              :class="{ 'is-active': getMarkAttrs('alignment').align === 'right' }"
              @click="commands.alignment({ align: 'right' })"
            >
              <q-icon name="format_align_right" />
            </button>
            <button
              :class="{ 'is-active': getMarkAttrs('alignment').align === 'justify' }"
              @click="commands.alignment({ align: 'justify' })"
            >
              <q-icon name="format_align_justify" />
            </button>
          </div>
        </button>

        <button
          :class="{ 'is-active': isActive.image() }"
          @click="showImagePrompt(commands.image)"
        >
          <q-icon name="image" />
        </button>
      </div>
    </editor-menu-bubble>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Strike,
  Underline,
  Link,
  History,
  TrailingNode,
  Image
} from 'tiptap-extensions'
import Alignment from '../utils/tiptap/Alignment'
import { LocalStorage } from 'quasar'
import { CONTENT_CACHE_KEY } from '../config'

export default {
  name: 'editor',

  components: {
    EditorContent,
    EditorMenuBubble
  },

  data () {
    return {
      keepInBounds: true,
      editor: null
    }
  },

  computed: {
    classNames () {
      const value = this.$store.getters['base/settings']
      return {
        editor: true,
        'par-space-between': value.parSpaceBetween,
        'par-indent-first-line': value.parIndentFirstLine
      }
    }
  },

  mounted () {
    const html = LocalStorage.getItem(CONTENT_CACHE_KEY)
    this.$store.dispatch('editor/updateContent', html)
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading(),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new Link(),
        new History(),
        new TrailingNode({
          node: 'paragraph',
          notAfter: ['paragraph']
        }),
        new Image(),
        new Alignment()
      ],
      content: html,
      autoFocus: true,
      onUpdate: ctx => {
        const html = ctx.getHTML()
        const content = this.finalizeContent(html)
        this.$store.dispatch('editor/updateContent', content)
      }
    })
  },

  beforeDestroy () {
    this.editor.destroy()
  },

  methods: {
    focus () {
      this.editor.focus()
    },

    setContent (content) {
      const current = this.editor.getHTML()
      if (content !== current) {
        this.editor.setContent(content)
        this.editor.focus()
      }
    },

    finalizeContent (html) {
      // TODO: avoid full-text search & replace
      return html
        .replace(/&lt;&lt;/, '&laquo;')
        .replace(/&gt;&gt;/, '&raquo;')
    },

    showImagePrompt (command) {
      this.$q.dialog({
        title: this.$t('Add image'),
        message: 'Please, enter the image source URL:',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk(src => {
        if (src !== null) {
          command({ src })
        }
      })
    }
  },

  watch: {
    '$store.state.editor.contentHTML': function (val) {
      this.setContent(val)
    }
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Spectral|Spectral+SC')
@import url('https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap')

.editor
  cursor text
  padding-top 1rem

  @media print
    padding 0

.ProseMirror
  max-width 700px
  margin 0 auto
  padding 0 1.5rem
  font-size 1rem
  font-family 'Martel', serif
  line-height 1.75em

  &:focus
    outline none

  @media print
    font-size 0.8rem
    max-width 100%

    :first-child
      margin-top 0 !important

  h1, h2, h3, h4, h5, h6
    margin 1em 0
    font-family 'Spectral', serif
    line-height 1.25em

  h1
    font-weight 800
    font-size 3em

  h2
    font-weight 400
    font-size 1.8em

  h3
    font-weight 600
    font-size 1.3em

  h4
    font-weight 600
    font-size 1.2em

  h5
    font-weight 600
    font-size 1.1em

  h6
    font-weight 600
    font-size 1em

  h1+h2, h2+h3, h3+h4, h4+h5, h5+h6
    margin-top -1.25em

  h1+h2
    color $grey-9

    @media print
      color: $grey-9 !important

  h1+h2+h3
    margin-top 3em

  h3, h4, h5, h6
    text-transform uppercase

  p,
  pre
    margin-bottom 0

  li
    p
      margin-bottom 0

  code,
  pre
    border-radius: .5rem
    color: $grey-1
    background-color: $grey-10

    @media print
      color: $grey-1 !important
      background-color: $grey-10 !important

  code
    padding: .25rem .5rem

  pre
    padding: 1rem

    code
      padding: 0

  blockquote
    margin 2.5em 0
    padding-left 2rem
    padding-right 2rem
    border-left 5px solid $grey-5
    font-size 1.25em
    line-height 1.75em

  hr
    margin 4rem auto
    max-width 10rem

  a
    color $accent
    cursor pointer

  img
    max-width 100%

  strong,
  b
    font-weight 800

.editor-menububble
  position absolute
  display flex
  z-index $z-top
  background $grey-10
  border-radius 5px
  padding 0.3rem
  margin-bottom 0.5rem
  transform translateX(-50%)
  visibility hidden
  opacity 0
  transition opacity 0.2s, visibility 0.2s

  .editor-menububble-popup
    position absolute
    flex-direction column
    left 0
    top 0
    background $grey-10

    button
      display none
      margin 0

      &.is-active
        display inline-flex

  button
    display inline-flex
    position relative
    background transparent
    border 0
    outline none
    color $grey-5
    font-size 1.2rem
    font-weight bold
    line-height 1.5rem
    vertical-align middle
    padding 0.2rem 0.5rem
    margin-right 0.2rem
    border-radius 3px
    cursor pointer

    .q-icon
      font-size 1.5rem

    &last-child
      margin-right 0

    &:hover
    &:focus
      color $grey-5 !important
      background-color rgba(white, 0.2)

      .editor-menububble-popup
        display inline-flex

        button
          display inline-flex

    &.is-active
      background-color $accent
      color $grey-1 !important

  &.is-active
    opacity 1
    visibility visible

.body--dark
  .ProseMirror
    h1+h2
      color $grey-5

    pre,
    code
      color $grey-10
      background-color $grey-1

  .editor-menububble
    background $grey-1

    .editor-menububble-popup
      background $grey-1

    button
      color $grey-10

      &:hover
        color $grey-10 !important
        background-color rgba(black, 0.2)

.par-space-between
  .ProseMirror
    p,
    pre
      margin-bottom 0.75em

.par-indent-first-line
  .ProseMirror
    p
      text-indent 2em
</style>
