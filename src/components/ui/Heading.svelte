<script lang="ts">
	import classNames from 'classnames';

	export let text: string;
	export let styles: string | undefined = undefined;
</script>

<h2 class={classNames('mt-8 mb-3 text-4xl font-semibold text-blue200', styles)}>
	{text}
</h2>
